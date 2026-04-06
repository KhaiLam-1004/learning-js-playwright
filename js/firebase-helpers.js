// Firebase helpers + User identity
// userName, userId defined in index.html globals

function submitWelcome() {
  var input = document.getElementById('welcomeName');
  var btn = document.getElementById('welcomeBtn');
  var name = input.value.trim();
  if (!name) { input.focus(); return; }

  btn.disabled = true;
  btn.textContent = 'Đang kiểm tra...';

  // Search Firestore for existing user with this name
  db.collection('users').where('name', '==', name).limit(1).get().then(function(snap) {
    if (!snap.empty) {
      // Found existing user — restore progress
      var doc = snap.docs[0];
      var data = doc.data();
      userId = doc.id;
      userName = data.name;

      // Restore progress from Firestore
      if (data.completedModules && data.completedModules.length > 0) {
        completed = {};
        data.completedModules.forEach(function(id) { completed[id] = true; });
        localStorage.setItem('pw-progress', JSON.stringify(completed));
      }
      if (data.xp) {
        xpData.xp = data.xp;
        xpData.streak = data.streak || 0;
        localStorage.setItem('pw-xp', JSON.stringify(xpData));
      }

      localStorage.setItem('pw-username', userName);
      localStorage.setItem('pw-userid', userId);
      document.getElementById('welcomeOverlay').classList.remove('open');
      renderUserBadge();
      renderSidebar(); render(); renderXP();
      showAchievement({ icon: '🫡', name: 'Ê ' + userName + ', lâu rồi!', desc: 'Tiến độ đã được khôi phục. Triển tiếp thôi!' });

      // GA
      if (typeof gtag === 'function') {
        gtag('set', 'user_properties', { user_name: userName, user_id_custom: userId });
        gtag('event', 'user_login', { user_name: userName });
      }
      fbSaveUser();
    } else {
      // New user — create
      userId = 'u_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
      userName = name;
      localStorage.setItem('pw-username', userName);
      localStorage.setItem('pw-userid', userId);
      document.getElementById('welcomeOverlay').classList.remove('open');
      renderUserBadge();

      if (typeof gtag === 'function') {
        gtag('set', 'user_properties', { user_name: userName, user_id_custom: userId });
        gtag('event', 'user_register', { user_name: userName, user_id_custom: userId });
      }
      fbSaveUser();
      showAchievement({ icon: '🎉', name: 'Welcome ' + userName + '!', desc: 'Hành trình từ zero đến hero bắt đầu!' });
    }
  }).catch(function(err) {
    // Firestore error — fallback to local only
    console.warn('Firebase lookup error:', err);
    userId = 'u_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
    userName = name;
    localStorage.setItem('pw-username', userName);
    localStorage.setItem('pw-userid', userId);
    document.getElementById('welcomeOverlay').classList.remove('open');
    renderUserBadge();
    fbSaveUser();
  });
}

function editUserName() {
  var newName = prompt('Nhập tên mới:', userName);
  if (!newName || !newName.trim() || newName.trim() === userName) return;
  var oldName = userName;
  userName = newName.trim();
  localStorage.setItem('pw-username', userName);
  renderUserBadge();
  // Update Firestore
  if (db && userId) {
    db.collection('users').doc(userId).update({ name: userName }).catch(function(){});
  }
  showAchievement({ icon: '✏️', name: 'Đã đổi tên', desc: oldName + ' → ' + userName });
}

function logoutUser() {
  if (!confirm('Đăng xuất khỏi ' + userName + '?\nTiến độ vẫn được lưu trên server.')) return;
  userName = '';
  userId = '';
  localStorage.removeItem('pw-username');
  localStorage.removeItem('pw-userid');
  document.getElementById('welcomeOverlay').classList.add('open');
  document.getElementById('welcomeName').value = '';
  document.getElementById('welcomeBtn').disabled = false;
  document.getElementById('welcomeBtn').textContent = 'Bắt đầu học!';
  renderUserBadge();
}

function renderUserBadge() {
  var el = document.getElementById('sidebarUser');
  if (!userName || userName === 'Ẩn danh') { el.style.display = 'none'; return; }
  var initial = userName.charAt(0).toUpperCase();
  el.style.display = 'flex';
  el.innerHTML = '<div class="user-avatar">' + initial + '</div>' +
    '<div class="user-info"><div class="user-name">' + escapeHtml(userName) + '</div><div class="user-label">Học viên</div></div>' +
    '<div style="display:flex;gap:4px;margin-left:auto">' +
    '<button onclick="editUserName()" title="Đổi tên" style="border:none;background:none;cursor:pointer;font-size:14px;padding:4px">✏️</button>' +
    '<button onclick="logoutUser()" title="Đăng xuất" style="border:none;background:none;cursor:pointer;font-size:14px;padding:4px">🚪</button>' +
    '</div>';
}

// Attach username to all GA events
function gaEvent(eventName, params) {
  if (typeof gtag !== 'function') return;
  params = params || {};
  params.user_name = userName || 'unknown';
  params.user_id_custom = userId || 'unknown';
  gtag('event', eventName, params);
}

// ===== FIREBASE HELPERS =====
function fbSaveUser() {
  if (!db || !userId) return;
  var done = 0;
  for (var k in completed) if (completed[k]) done++;
  db.collection('users').doc(userId).set({
    name: userName,
    userId: userId,
    xp: xpData.xp,
    level: getLevel(xpData.xp).name,
    streak: xpData.streak,
    modulesCompleted: done,
    totalModules: D.length,
    lastActive: new Date().toISOString(),
    registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
    device: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
    completedModules: Object.keys(completed).filter(function(k){return completed[k]}).map(Number)
  }, { merge: true }).catch(function(e){ console.warn('Firebase error:', e); });
}

function fbLogActivity(action, details) {
  if (!db || !userId) return;
  db.collection('activities').add({
    userId: userId,
    userName: userName,
    action: action,
    details: details || '',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function(e){ console.warn('Firebase error:', e); });
  // Also update user's lastActive
  db.collection('users').doc(userId).update({
    lastActive: new Date().toISOString(),
    xp: xpData.xp,
    level: getLevel(xpData.xp).name,
    streak: xpData.streak,
    modulesCompleted: Object.keys(completed).filter(function(k){return completed[k]}).length,
    completedModules: Object.keys(completed).filter(function(k){return completed[k]}).map(Number)
  }).catch(function(){});
}

function fbSaveCode(code, moduleId, label, output) {
  if (!db || !userId || !code || code.length < 5) return;
  db.collection('codes').add({
    userId: userId,
    userName: userName,
    moduleId: moduleId,
    label: label || 'Module ' + moduleId,
    code: code.substring(0, 5000),
    output: (output || '').substring(0, 2000),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function(e){ console.warn('Firebase code save error:', e); });
}

// Show welcome popup if first visit
function checkWelcome() {
  if (!userName) {
    document.getElementById('welcomeOverlay').classList.add('open');
    setTimeout(function() { document.getElementById('welcomeName').focus(); }, 300);
  } else {
    renderUserBadge();
    // Set GA user properties on return visit
    if (typeof gtag === 'function') {
      gtag('set', 'user_properties', { user_name: userName, user_id_custom: userId });
    }
    fbSaveUser(); // update lastActive on return
  }
}

