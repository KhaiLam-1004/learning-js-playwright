// App logic - render, navigation, theme
// Globals used: active, completed, darkMode, D, MODULE_TIME (from index.html + gamification.js)

function renderSidebar() {
  var nav = document.getElementById('sidebarNav');
  var phases = {0:'Giới thiệu', 1:'Phase 1: JS & OOP Cơ bản', 2:'Phase 2: Playwright', 3:'Phase 3: Nâng cao'};
  var lastPhase = -1, html = '';
  for (var j = 0; j < D.length; j++) {
    var m = D[j];
    if (m.phase !== lastPhase) {
      var phaseLocked = (m.phase >= 2 && !isPhaseGatePassed(m.phase - 1));
      html += '<div class="nav-phase' + (phaseLocked ? ' phase-locked' : '') + '">' + (phaseLocked ? '🔒 ' : '') + phases[m.phase] + '</div>';
      lastPhase = m.phase;
    }
    var isDone = completed[m.id], isActive = m.id === active;
    var locked = !isModuleUnlocked(m.id);
    html += '<div class="nav-item' + (isActive ? ' active' : '') + (locked ? ' locked' : '') + '" onclick="goTo(' + m.id + ')">';
    if (locked) {
      html += '<div class="check locked-icon">🔒</div>';
    } else {
      html += '<div class="check' + (isDone ? ' done' : '') + '">' + (isDone ? '✓' : '') + '</div>';
    }
    var namePrefix = m.id === 0 ? 'Intro' : (m.gate ? '🚪 ' : 'M' + m.id + ': ');
    html += '<span>' + namePrefix + m.title + '</span></div>';
  }
  nav.innerHTML = html;
  updateProgress();
}
function updateProgress() {
  var done = 0;
  for (var j = 0; j < D.length; j++) if (completed[D[j].id]) done++;
  var pct = Math.round(done / D.length * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = done + ' / ' + D.length + ' modules hoàn thành (' + pct + '%)';
}
function render() {
  var m = null, mIdx = 0;
  for (var k = 0; k < D.length; k++) if (D[k].id === active) { m = D[k]; mIdx = k; break; }
  var pn = {0:'Giới thiệu', 1:'Phase 1: JS & OOP Cơ bản', 2:'Phase 2: Playwright', 3:'Phase 3: Nâng cao'};
  var isGate = m.gate;
  var label = active === 0 ? 'Giới thiệu khóa học' : (isGate ? m.title : 'Module ' + m.id + ': ' + m.title);
  document.getElementById('breadcrumb').innerHTML = pn[m.phase] + ' / <b>' + label + '</b>';
  var time = MODULE_TIME[m.id] || 30;
  var numDisplay = active === 0 ? '📖' : (isGate ? '🚪' : ('0' + m.id).slice(-2));
  var heroHtml = '<div class="module-hero' + (isGate ? ' gate-hero' : '') + '"><div class="num">' + numDisplay + '</div><h2>' + label + '</h2><p>' + m.week + '</p><div class="module-meta"><span class="phase-badge">' + pn[m.phase] + '</span><span class="meta-item">⏱ ~' + time + ' phút</span><span class="meta-item">📖 ' + Math.round(m.html.length/500) + ' phần</span></div><button class="complete-btn' + (completed[m.id] ? ' done' : '') + '" onclick="toggleComplete(' + m.id + ')">' + (completed[m.id] ? '✓ Đã hoàn thành' : '○ Đánh dấu hoàn thành') + '</button></div>';
  var prev = '<div></div>', next = '<div></div>';
  if (mIdx > 0) {
    var prevM = D[mIdx - 1];
    prev = '<button class="pv" onclick="goTo(' + prevM.id + ')">← ' + (prevM.id === 0 ? 'Intro' : prevM.title) + '</button>';
  }
  if (mIdx < D.length - 1) {
    var nextM = D[mIdx + 1];
    next = '<button class="nx" onclick="goTo(' + nextM.id + ')">' + nextM.title + ' →</button>';
  }
  // Build Table of Contents from h2/h3 headings
  var contentHtml = m.html;
  var headingRegex = /<h([23])>(.*?)<\/h[23]>/g;
  var match, tocItems = [], hCount = 0;
  var tempContent = contentHtml;
  while ((match = headingRegex.exec(contentHtml)) !== null) {
    var level = match[1];
    var text = match[2].replace(/<[^>]+>/g, '');
    if (!text.trim()) continue;
    hCount++;
    var hId = 'sec-' + active + '-' + hCount;
    var origTag = match[0];
    var newTag = '<h' + level + ' id="' + hId + '">' + match[2] + '</h' + level + '>';
    tempContent = tempContent.replace(origTag, newTag);
    tocItems.push({ id: hId, text: text, level: level });
  }
  contentHtml = tempContent;
  window._tocItems = tocItems; // store for scroll spy

  // Right-side TOC sidebar
  var tocSidebar = document.getElementById('tocSidebar');
  var ct = document.getElementById('ct');
  if (tocItems.length > 2) {
    var tocListHtml = '<ul class="toc-list">';
    tocItems.forEach(function(item) {
      var isSub = item.level === '3';
      var isSpecial = item.text.includes('Mini Project') || item.text.includes('Bài tập') || item.text.includes('Bài kiểm tra') || item.text.includes('Bài thi cuối');
      tocListHtml += '<li class="' + (isSub ? 'toc-sub' : '') + (isSpecial ? ' toc-highlight' : '') + '">';
      tocListHtml += '<a href="#' + item.id + '" data-toc-id="' + item.id + '" onclick="event.preventDefault();smoothScrollTo(\'' + item.id + '\')">' + item.text + '</a></li>';
    });
    tocListHtml += '</ul>';
    tocListHtml += '<div class="toc-progress"><span>Tiến độ đọc</span><div class="bar"><div class="fill" id="tocReadFill" style="width:0%"></div></div></div>';

    tocSidebar.innerHTML = '<div class="toc-inner"><h4>📑 Mục lục</h4>' + tocListHtml + '</div>';
    tocSidebar.style.display = '';
    ct.classList.add('has-toc');

    // Inline TOC for mobile
    var inlineTocHtml = '<details class="toc-inline" id="moduleToc"><summary>📑 Mục lục (' + tocItems.length + ' phần)</summary>';
    inlineTocHtml += '<ul class="toc-list">';
    tocItems.forEach(function(item) {
      var isSub = item.level === '3';
      inlineTocHtml += '<li class="' + (isSub ? 'toc-sub' : '') + '">';
      inlineTocHtml += '<a href="#' + item.id + '" onclick="event.preventDefault();smoothScrollTo(\'' + item.id + '\')">' + item.text + '</a></li>';
    });
    inlineTocHtml += '</ul></details>';

    document.getElementById('ct').innerHTML = heroHtml + inlineTocHtml + contentHtml + '<div class="nav-buttons">' + prev + next + '</div>';
  } else {
    tocSidebar.innerHTML = '';
    tocSidebar.style.display = 'none';
    ct.classList.remove('has-toc');
    document.getElementById('ct').innerHTML = heroHtml + contentHtml + '<div class="nav-buttons">' + prev + next + '</div>';
  }
  addCodeFeatures();
}
function addCodeFeatures() {
  // Add copy buttons to pre blocks
  document.querySelectorAll('#ct pre').forEach(function(pre) {
    if (pre.closest('[data-playground]')) return;
    if (pre.parentElement.classList.contains('code-wrap')) return;
    var wrapper = document.createElement('div');
    wrapper.className = 'code-wrap';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    var actions = document.createElement('div');
    actions.className = 'code-actions';
    actions.innerHTML = '<button onclick="copyCode(this)">📋 Copy</button>';
    wrapper.appendChild(actions);
  });
  // Ensure all playgrounds have expand button
  document.querySelectorAll('#ct [data-playground]').forEach(function(pg) {
    var header = pg.querySelector('.playground-header');
    if (!header) return;
    if (header.querySelector('.expand-btn')) return; // already has one
    var titleEl = header.querySelector('span');
    var title = titleEl ? titleEl.textContent.replace('💻 ', '') : 'Code Editor';
    var btn = document.createElement('button');
    btn.className = 'expand-btn';
    btn.title = 'Mở rộng';
    btn.textContent = '⛶ Phóng to';
    btn.onclick = function() { expandPlayground(this, title); };
    var actionsDiv = header.querySelector('div');
    if (actionsDiv) actionsDiv.insertBefore(btn, actionsDiv.firstChild);
  });
}
function copyCode(btn) {
  var pre = btn.closest('.code-wrap').querySelector('pre');
  navigator.clipboard.writeText(pre.textContent).then(function() {
    btn.textContent = '✓ Copied!';
    setTimeout(function() { btn.textContent = '📋 Copy'; }, 1500);
  });
}
function goTo(id) {
  // Phase gate check
  if (!isModuleUnlocked(id)) {
    var targetMod = D.find(function(x){return x.id===id;});
    var targetPhase = targetMod ? targetMod.phase : 0;
    var requiredGate = getRequiredGateForPhase(targetPhase);
    var phaseNames = {1:'Phase 1: JS & OOP', 2:'Phase 2: Playwright'};
    var gs = getPhaseGateStatus(requiredGate);
    var needs = [];
    if (!gs.examPassed) needs.push('đạt bài kiểm tra kiến thức (>=70%)');
    if (!gs.codePassed) needs.push('hoàn thành bài code challenge');
    alert('🔒 Phase này đang bị khóa!\n\nĐể mở khóa, bạn cần pass "Bài thi cuối ' + phaseNames[requiredGate] + '":\n• ' + needs.join('\n• '));
    return;
  }
  active = id; renderSidebar(); render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  // GA + Firebase: track module view
  var m2 = D.find(function(x){return x.id===id;});
  gaEvent('view_module', { module_id: id, module_title: m2 ? m2.title : '' });
  fbLogActivity('view_module', 'Module ' + id + ': ' + (m2 ? m2.title : ''));
  // Save current module to user profile
  if (db && userId) db.collection('users').doc(userId).update({ currentModule: id, currentModuleTitle: m2 ? m2.title : '' }).catch(function(){});
}
function toggleComplete(id) {
  completed[id] = !completed[id];
  localStorage.setItem('pw-progress', JSON.stringify(completed));
  renderSidebar(); render();
  // GA + Firebase: track module complete/uncomplete
  var m3 = D.find(function(x){return x.id===id;});
  gaEvent(completed[id] ? 'complete_module' : 'uncomplete_module', { module_id: id, module_title: m3 ? m3.title : '' });
  fbLogActivity(completed[id] ? 'complete_module' : 'uncomplete_module', 'Module ' + id + ': ' + (m3 ? m3.title : ''));
  if (completed[id]) addXP(50); // +50 XP khi hoàn thành module
  checkAchievements();
}
function resetProgress() {
  if (confirm('Xóa toàn bộ tiến độ học và XP?')) {
    completed = {}; localStorage.removeItem('pw-progress');
    xpData = {xp:0,streak:0,lastDate:'',achievements:[]}; localStorage.removeItem('pw-xp');
    gateData = {}; localStorage.removeItem('pw-gates');
    renderSidebar(); render(); renderXP();
  }
}
function toggleTheme() {
  darkMode = !darkMode;
  if (darkMode) { document.documentElement.setAttribute('data-theme', 'dark'); localStorage.setItem('pw-theme', 'dark'); }
  else { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('pw-theme', 'light'); }
  document.getElementById('themeBtn').textContent = darkMode ? '☀️ Light' : '🌙 Dark';
}
document.getElementById('themeBtn').textContent = darkMode ? '☀️ Light' : '🌙 Dark';
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

