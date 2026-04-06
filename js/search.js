// Search, TOC, Scroll spy
// ===== SEARCH =====
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  var input = document.getElementById('searchModalInput');
  input.value = ''; input.focus();
  document.getElementById('searchResults').innerHTML = '<div style="padding:20px;color:var(--text3);text-align:center">Gõ để tìm kiếm trong giáo trình...</div>';
}
function closeSearch() { document.getElementById('searchOverlay').classList.remove('open'); }
function doSearch(query) {
  var results = document.getElementById('searchResults');
  if (query.length < 2) { results.innerHTML = '<div style="padding:20px;color:var(--text3);text-align:center">Gõ ít nhất 2 ký tự...</div>'; return; }
  var q = query.toLowerCase(), found = [];
  for (var j = 0; j < D.length; j++) {
    var m = D[j], text = m.html.replace(/<[^>]+>/g, '');
    var idx = text.toLowerCase().indexOf(q);
    if (idx !== -1 || m.title.toLowerCase().includes(q)) {
      var excerpt = '';
      if (idx !== -1) {
        var start = Math.max(0, idx - 40), end = Math.min(text.length, idx + query.length + 40);
        excerpt = (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
        excerpt = excerpt.replace(new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
      }
      found.push({ id: m.id, title: (m.id === 0 ? 'Intro' : 'Module ' + m.id) + ': ' + m.title, excerpt: excerpt });
    }
  }
  if (found.length === 0) { results.innerHTML = '<div style="padding:20px;color:var(--text3);text-align:center">Không tìm thấy.</div>'; return; }
  results.innerHTML = found.map(function(f) {
    return '<div class="search-result-item" onclick="goTo(' + f.id + ');closeSearch()"><div class="title">' + f.title + '</div>' + (f.excerpt ? '<div class="excerpt">' + f.excerpt + '</div>' : '') + '</div>';
  }).join('');
}
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') { closePopupEditor(); closeSearch(); closePlayground(); }
  if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
    if (e.key === 'ArrowLeft' && active > 0) goTo(active - 1);
    if (e.key === 'ArrowRight' && active < D.length - 1) goTo(active + 1);
  }
  if (e.key === 'Tab' && e.target.classList.contains('playground-editor')) {
    e.preventDefault();
    var start = e.target.selectionStart, end = e.target.selectionEnd;
    e.target.value = e.target.value.substring(0, start) + '  ' + e.target.value.substring(end);
    e.target.selectionStart = e.target.selectionEnd = start + 2;
  }
});

// ===== TABLE OF CONTENTS =====
function smoothScrollTo(id) {
  var el = document.getElementById(id);
  if (el) {
    var offset = 60; // topbar height
    var y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    // Highlight briefly
    el.style.transition = 'background .3s, padding .3s';
    el.style.background = 'var(--primary-bg)';
    el.style.borderRadius = '8px';
    el.style.paddingLeft = '8px';
    setTimeout(function() { el.style.background = ''; el.style.paddingLeft = ''; }, 2000);
  }
}
function scrollToToc() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SCROLL SPY + READING PROGRESS =====
window.addEventListener('scroll', function() {
  var h = document.documentElement;
  var pct = Math.min(100, Math.round(h.scrollTop / (h.scrollHeight - h.clientHeight) * 100)) || 0;
  document.getElementById('readingBar').style.width = pct + '%';

  // Back to top button
  var btn = document.getElementById('backToToc');
  if (h.scrollTop > 600) btn.classList.add('visible');
  else btn.classList.remove('visible');

  // TOC reading progress
  var tocFill = document.getElementById('tocReadFill');
  if (tocFill) tocFill.style.width = pct + '%';

  // Scroll spy: highlight current section in TOC
  var items = window._tocItems || [];
  if (!items.length) return;
  var currentId = '';
  for (var i = items.length - 1; i >= 0; i--) {
    var el = document.getElementById(items[i].id);
    if (el && el.getBoundingClientRect().top <= 80) { currentId = items[i].id; break; }
  }
  document.querySelectorAll('.toc-sidebar a[data-toc-id]').forEach(function(a) {
    a.classList.toggle('toc-active', a.getAttribute('data-toc-id') === currentId);
  });
});

