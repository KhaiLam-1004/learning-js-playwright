// Code Playground + Popup Editor
// ===== CODE PLAYGROUND =====
function runPlayground(btnOrEditorId, outputId) {
  var editor, output;
  if (typeof btnOrEditorId === 'string') { editor = document.getElementById(btnOrEditorId); output = document.getElementById(outputId); }
  else { var pg = btnOrEditorId.closest('[data-playground], .playground'); editor = pg.querySelector('.playground-editor'); output = pg.querySelector('.playground-output'); }
  var code = editor.value, logs = [];
  var origLog = console.log, origWarn = console.warn, origError = console.error;
  console.log = function() { logs.push({ type: 'log', text: Array.from(arguments).map(function(a) { return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a); }).join(' ') }); };
  console.warn = function() { logs.push({ type: 'warn', text: Array.from(arguments).map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ') }); };
  console.error = function() { logs.push({ type: 'err', text: Array.from(arguments).map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ') }); };
  // GA: track playground usage with username
  gaEvent('run_playground', { module_id: active });
  // Only award XP if user actually modified the code
  var defaultCode = editor.getAttribute('data-original');
  if (!defaultCode) { editor.setAttribute('data-original', code); }
  else if (code.trim() !== defaultCode.trim() && code.trim().length > 10) {
    addXP(5);
    // Save code to Firebase
    var pgLabel = pg.querySelector('.playground-header span');
    fbSaveCode(code, active, pgLabel ? pgLabel.textContent : '', '');
  }
  try {
    var isAsync = code.includes('await') || code.includes('async');
    if (isAsync) {
      var fn = new Function('return (async function() {\n' + code + '\n})()');
      fn().then(function() { renderOutput(output, logs); }).catch(function(e) { logs.push({ type: 'err', text: '❌ ' + e.message }); renderOutput(output, logs); }).finally(function() { console.log = origLog; console.warn = origWarn; console.error = origError; });
      setTimeout(function() { renderOutput(output, logs); }, 100);
      return;
    } else {
      var result = new Function(code)();
      if (result !== undefined) logs.push({ type: 'log', text: '→ ' + (typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result)) });
    }
  } catch (e) { logs.push({ type: 'err', text: '❌ ' + e.message }); }
  console.log = origLog; console.warn = origWarn; console.error = origError;
  renderOutput(output, logs);
}
function renderOutput(output, logs) {
  if (logs.length === 0) { output.innerHTML = '<span style="color:var(--text3)">// Không có output</span>'; return; }
  output.innerHTML = logs.map(function(l) { return '<div class="' + (l.type === 'err' ? 'err-line' : 'log-line') + '">' + escapeHtml(l.text) + '</div>'; }).join('');
}
function escapeHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function clearPlayground(btnOrEditorId, outputId) {
  var editor, output;
  if (typeof btnOrEditorId === 'string') { editor = document.getElementById(btnOrEditorId); output = document.getElementById(outputId); }
  else { var pg = btnOrEditorId.closest('[data-playground], .playground'); editor = pg.querySelector('.playground-editor'); output = pg.querySelector('.playground-output'); }
  editor.value = ''; output.innerHTML = '<span style="color:var(--text3)">// Đã xóa</span>';
}
function openPlayground() { document.getElementById('floatingPlayground').style.display = 'block'; }
function closePlayground() { document.getElementById('floatingPlayground').style.display = 'none'; }

// ===== POPUP EDITOR =====
var popupSource = null; // reference to the original playground
var popupChallengeId = null;

function expandPlayground(btn, title) {
  var pg = btn.closest('[data-playground]');
  var editor = pg.querySelector('.playground-editor');
  var output = pg.querySelector('.playground-output');
  popupSource = { editor: editor, output: output, pg: pg };
  popupChallengeId = pg.getAttribute('data-challenge-id') || null;

  // Copy content to popup
  document.getElementById('popupTitle').textContent = title || 'Code Editor';
  document.getElementById('popupCode').value = editor.value;
  document.getElementById('popupOutput').innerHTML = output.innerHTML;

  // Show/hide check button
  document.getElementById('popupCheckBtn').style.display = popupChallengeId ? '' : 'none';

  // Open popup
  document.getElementById('popupOverlay').classList.add('open');
  document.getElementById('popupCode').focus();
  updatePopupLineInfo();
}

function closePopupEditor() {
  // Sync code back to original
  if (popupSource) {
    popupSource.editor.value = document.getElementById('popupCode').value;
    popupSource.output.innerHTML = document.getElementById('popupOutput').innerHTML;
  }
  document.getElementById('popupOverlay').classList.remove('open');
  popupSource = null;
  popupChallengeId = null;
}

function runPopupEditor() {
  var code = document.getElementById('popupCode').value;
  var output = document.getElementById('popupOutput');
  var logs = [];
  var origLog = console.log, origWarn = console.warn, origError = console.error;
  console.log = function() { logs.push({ type: 'log', text: Array.from(arguments).map(function(a) { return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a); }).join(' ') }); };
  console.warn = function() { logs.push({ type: 'warn', text: Array.from(arguments).map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ') }); };
  console.error = function() { logs.push({ type: 'err', text: Array.from(arguments).map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ') }); };
  try {
    var isAsync = code.includes('await') || code.includes('async');
    if (isAsync) {
      var fn = new Function('return (async function() {\n' + code + '\n})()');
      fn().then(function() { renderOutput(output, logs); }).catch(function(e) { logs.push({ type: 'err', text: '❌ ' + e.message }); renderOutput(output, logs); }).finally(function() { console.log = origLog; console.warn = origWarn; console.error = origError; });
      setTimeout(function() { renderOutput(output, logs); }, 100);
      return;
    } else {
      var result = new Function(code)();
      if (result !== undefined) logs.push({ type: 'log', text: '→ ' + (typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result)) });
    }
  } catch (e) { logs.push({ type: 'err', text: '❌ ' + e.message }); }
  console.log = origLog; console.warn = origWarn; console.error = origError;
  renderOutput(output, logs);
  // Sync to source
  if (popupSource) {
    popupSource.editor.value = code;
    popupSource.output.innerHTML = output.innerHTML;
    // Only XP if code was modified
    var orig = popupSource.editor.getAttribute('data-original');
    if (orig && code.trim() !== orig.trim() && code.trim().length > 10) addXP(5);
  }
}

function clearPopupEditor() {
  document.getElementById('popupCode').value = '';
  document.getElementById('popupOutput').innerHTML = '<span style="color:var(--text3)">// Đã xóa</span>';
}

function checkPopupChallenge() {
  if (!popupChallengeId || !popupSource) return;
  // Sync code back first
  popupSource.editor.value = document.getElementById('popupCode').value;
  // Find and click the check button on the original challenge
  var challengeDiv = document.getElementById('challenge-' + popupChallengeId);
  if (challengeDiv) {
    var checkBtn = challengeDiv.querySelector('[onclick*="checkChallenge"]');
    if (checkBtn) checkBtn.click();
    // Copy result back to popup
    setTimeout(function() {
      var result = document.getElementById('cr-' + popupChallengeId);
      if (result && result.textContent) {
        var output = document.getElementById('popupOutput');
        output.innerHTML += '<div style="margin-top:8px;padding:8px 12px;border-radius:6px;font-weight:600;' +
          (result.classList.contains('pass') ? 'background:var(--green-bg);color:var(--green-text)' : 'background:var(--red-bg);color:var(--red-text)') +
          '">' + escapeHtml(result.textContent) + '</div>';
      }
    }, 100);
  }
}

function updatePopupLineInfo() {
  var ta = document.getElementById('popupCode');
  var lines = ta.value.substr(0, ta.selectionStart).split('\n').length;
  var chars = ta.value.length;
  document.getElementById('popupLineInfo').textContent = 'Dòng: ' + lines + ' | Ký tự: ' + chars;
}

// Popup keyboard events
document.getElementById('popupCode').addEventListener('input', updatePopupLineInfo);
document.getElementById('popupCode').addEventListener('click', updatePopupLineInfo);
document.getElementById('popupCode').addEventListener('keydown', function(e) {
  // Ctrl+Enter to run
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runPopupEditor(); }
  // Tab
  if (e.key === 'Tab') {
    e.preventDefault();
    var start = this.selectionStart, end = this.selectionEnd;
    this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
  }
  updatePopupLineInfo();
});

