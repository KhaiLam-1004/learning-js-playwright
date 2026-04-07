// Gamification, Quiz, Exam, Exercise, Challenge systems
// ============================================
// ===== QUIZ & CHALLENGE HELPERS =====
// ============================================
function buildQuiz(quizId, questions) {
  var html = '<div class="quiz" id="quiz-' + quizId + '">';
  html += '<div class="quiz-title">📝 Quiz - Kiểm tra kiến thức</div>';
  questions.forEach(function(q, qi) {
    html += '<div class="quiz-q" data-answer="' + q.answer + '" data-qi="' + qi + '">';
    html += '<p>' + (qi+1) + '. ' + q.q + '</p>';
    q.opts.forEach(function(opt, oi) {
      html += '<label onclick="checkQuizAnswer(this,' + oi + ')"><input type="radio" name="q' + quizId + '_' + qi + '" style="display:none"> ' + String.fromCharCode(65+oi) + '. ' + opt + '</label>';
    });
    html += '<div class="explain">' + (q.explain || '') + '</div>';
    html += '</div>';
  });
  html += '<div class="quiz-result" id="quiz-result-' + quizId + '" style="display:none"></div>';
  html += '<button onclick="scoreQuiz(\'' + quizId + '\',' + questions.length + ')" style="margin-top:12px;padding:8px 20px;border:none;background:var(--primary);color:#fff;border-radius:8px;cursor:pointer;font-weight:700;font-size:14px">Xem kết quả</button>';
  html += '</div>';
  return html;
}
function checkQuizAnswer(label, chosen) {
  var qDiv = label.closest('.quiz-q');
  if (qDiv.classList.contains('answered')) return;
  qDiv.classList.add('answered');
  var correct = parseInt(qDiv.getAttribute('data-answer'));
  var labels = qDiv.querySelectorAll('label');
  labels.forEach(function(l,i) {
    l.classList.add('disabled');
    if (i === correct) l.classList.add('correct');
    if (i === chosen && chosen !== correct) l.classList.add('wrong');
  });
  qDiv.querySelector('.explain').classList.add('show');
  if (chosen === correct) addXP(10);
}
function scoreQuiz(quizId, total) {
  var quiz = document.getElementById('quiz-' + quizId);
  var qs = quiz.querySelectorAll('.quiz-q');
  var correct = 0;
  qs.forEach(function(q) {
    var ans = parseInt(q.getAttribute('data-answer'));
    var chosen = q.querySelector('label.correct.wrong') ? -1 : (q.querySelector('label.correct') ? ans : -1);
    var wrongLabel = q.querySelector('label.wrong');
    if (!wrongLabel && q.querySelector('label.correct')) correct++;
  });
  var result = document.getElementById('quiz-result-' + quizId);
  var pct = Math.round(correct/total*100);
  result.style.display = 'block';
  if (pct >= 80) { result.className = 'quiz-result good'; result.textContent = '🎉 ' + correct + '/' + total + ' (' + pct + '%) — Xuất sắc!'; addXP(30); }
  else if (pct >= 50) { result.className = 'quiz-result ok'; result.textContent = '👍 ' + correct + '/' + total + ' (' + pct + '%) — Khá! Xem lại phần sai nhé.'; addXP(15); }
  else { result.className = 'quiz-result bad'; result.textContent = '💪 ' + correct + '/' + total + ' (' + pct + '%) — Cần ôn lại. Đừng nản!'; }
}

// ============================================
// ===== EXERCISE SUBMISSION SYSTEM =========
// ============================================
function buildExercise(id, level, title, desc, hint, startCode, solutionCode, explain, testFn, rows) {
  var levelClass = level === 'green' ? 'tg' : (level === 'yellow' ? 'ty' : 'tr');
  var levelIcon = level === 'green' ? '🟢' : (level === 'yellow' ? '🟡' : '🔴');
  return '<div class="exercise" id="ex-' + id + '">' +
    '<div class="ex-header"><span class="tag ' + levelClass + '">' + levelIcon + ' ' + title + '</span><span id="ex-badge-' + id + '"></span></div>' +
    '<div class="ex-desc">' + desc + '</div>' +
    (hint ? '<div class="ex-hint">💡 Gợi ý: ' + hint + '</div>' : '') +
    '<div class="playground" data-playground data-exercise-id="' + id + '">' +
    '<div class="playground-header"><span>💻 Viết code</span><div style="display:flex;gap:6px">' +
    '<button onclick="expandPlayground(this,\'' + title.replace(/'/g,"\\'") + '\')" class="expand-btn" title="Mở rộng">⛶ Phóng to</button>' +
    '<button onclick="runPlayground(this)" style="background:var(--green)">▶ Chạy</button>' +
    '<button class="submit-btn" id="ex-submit-' + id + '" onclick="submitExercise(\'' + id + '\')">📝 Nộp bài</button>' +
    '</div></div>' +
    '<textarea class="playground-editor" spellcheck="false" rows="' + (rows||5) + '">' + startCode + '</textarea>' +
    '<div class="playground-output"><span style="color:var(--text3)">// Viết code rồi nhấn 📝 Nộp bài</span></div>' +
    '</div>' +
    '<div class="ex-solution" id="ex-sol-' + id + '">' +
    '<div class="ex-solution-header" id="ex-sol-header-' + id + '"></div>' +
    '<pre>' + (solutionCode || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>' +
    '<div class="ex-explain">' + (explain || '') + '</div>' +
    '</div></div>';
}

var exerciseTests = {};
function registerExercise(id, testFn) { exerciseTests[id] = testFn; }

function submitExercise(id) {
  var exDiv = document.getElementById('ex-' + id);
  var pg = exDiv.querySelector('[data-playground]');
  var editor = pg.querySelector('.playground-editor');
  var output = pg.querySelector('.playground-output');
  var code = editor.value;

  if (code.trim().length < 5) { alert('Hãy viết code trước khi nộp bài!'); return; }

  // Run code first
  var logs = [];
  var origLog = console.log, origWarn = console.warn, origError = console.error;
  console.log = function() { logs.push(Array.from(arguments).map(function(a){return typeof a==='object'?JSON.stringify(a):String(a)}).join(' ')); };
  console.warn = console.log;
  console.error = function() { logs.push(Array.from(arguments).map(function(a){return typeof a==='object'?JSON.stringify(a):String(a)}).join(' ')); };

  var hasError = false;
  try {
    var isAsync = code.includes('await') || code.includes('async');
    if (isAsync) {
      new Function('return (async function() {\n' + code + '\n})()')().then(function(){
        finishSubmit(id, logs, code, false);
      }).catch(function(e){ logs.push('Error: ' + e.message); finishSubmit(id, logs, code, true); });
      console.log = origLog; console.warn = origWarn; console.error = origError;
      renderOutput(output, logs.map(function(l){return {type:'log',text:l}}));
      return;
    } else {
      new Function(code)();
    }
  } catch(e) { logs.push('Error: ' + e.message); hasError = true; }

  console.log = origLog; console.warn = origWarn; console.error = origError;
  renderOutput(output, logs.map(function(l){return {type:'log',text:l}}));
  finishSubmit(id, logs, code, hasError);
}

function finishSubmit(id, logs, code, hasError) {
  var solDiv = document.getElementById('ex-sol-' + id);
  var headerDiv = document.getElementById('ex-sol-header-' + id);
  var badgeDiv = document.getElementById('ex-badge-' + id);
  var submitBtn = document.getElementById('ex-submit-' + id);

  var pass = false;
  if (exerciseTests[id] && !hasError) {
    var result = exerciseTests[id](logs, code);
    pass = result.pass;
  }

  // Show result badge (NOT solution yet)
  if (pass) {
    badgeDiv.innerHTML = '<span class="submitted-badge pass">✅ Đạt</span>';
    addXP(25);
    // Phase gate: record if this is a phase gate exercise (gp1_code*, gp2_code*)
    var exPhaseMatch = id.match(/^gp(\d+)_code/);
    if (exPhaseMatch) recordPhaseGatePass(parseInt(exPhaseMatch[1]), 'code');
  } else {
    badgeDiv.innerHTML = '<span class="submitted-badge fail">❌ Chưa đạt</span>';
    addXP(5);
  }

  // Set solution header (hidden until user clicks "Xem đáp án")
  if (pass) {
    headerDiv.className = 'ex-solution-header correct';
    headerDiv.innerHTML = '✅ Chính xác! Đây là đáp án mẫu:';
  } else {
    headerDiv.className = 'ex-solution-header wrong';
    headerDiv.innerHTML = '❌ Chưa đúng. Đây là đáp án và hướng giải:';
  }

  // Replace submit button with "Làm lại" + "Xem đáp án"
  var actionsHtml = '<button class="submit-btn" onclick="retryExercise(\'' + id + '\')" style="background:var(--text3)">🔄 Làm lại</button> ';
  actionsHtml += '<button class="submit-btn" onclick="showExSolution(\'' + id + '\')" style="background:var(--primary)">📖 Xem đáp án</button>';
  submitBtn.outerHTML = '<span id="ex-actions-' + id + '">' + actionsHtml + '</span>';

  // Firebase: save submission detail
  if (db && userId) {
    db.collection('submissions').add({
      userId: userId,
      userName: userName,
      exerciseId: id,
      moduleId: active,
      type: 'exercise',
      code: code.substring(0, 5000),
      output: logs.join('\n').substring(0, 2000),
      pass: pass,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function(){});
  }
  fbLogActivity('submit_exercise', id + (pass ? ' (PASS)' : ' (FAIL)'));
}

function showExSolution(id) {
  var solDiv = document.getElementById('ex-sol-' + id);
  solDiv.classList.add('show');
  // Hide the "Xem đáp án" button after clicking
  var actions = document.getElementById('ex-actions-' + id);
  actions.innerHTML = '<button class="submit-btn" onclick="retryExercise(\'' + id + '\')" style="background:var(--text3)">🔄 Làm lại</button>';
}

function retryExercise(id) {
  var solDiv = document.getElementById('ex-sol-' + id);
  var badgeDiv = document.getElementById('ex-badge-' + id);
  solDiv.classList.remove('show');
  badgeDiv.innerHTML = '';
  // Restore submit button
  var actionsSpan = document.getElementById('ex-actions-' + id);
  if (actionsSpan) {
    actionsSpan.outerHTML = '<button class="submit-btn" id="ex-submit-' + id + '" onclick="submitExercise(\'' + id + '\')">📝 Nộp bài</button>';
  }
}

function buildChallenge(id, title, desc, startCode, testFn, rows) {
  return '<div class="challenge" id="challenge-' + id + '">' +
    '<div class="challenge-title">🏆 Code Challenge: ' + title + '</div>' +
    '<div class="challenge-desc">' + desc + '</div>' +
    '<div class="playground" data-playground data-challenge-id="' + id + '">' +
    '<div class="playground-header"><span>💻 Viết code</span><div style="display:flex;gap:6px"><button onclick="expandPlayground(this,\'' + title.replace(/'/g,"\\'") + '\')" class="expand-btn" title="Mở rộng">⛶ Phóng to</button><button onclick="runPlayground(this)" style="background:var(--green)">▶ Chạy</button><button onclick="checkChallenge(\'' + id + '\',this)" style="background:var(--primary)">✓ Kiểm tra</button></div></div>' +
    '<textarea class="playground-editor" spellcheck="false" rows="' + (rows||5) + '">' + startCode + '</textarea>' +
    '<div class="playground-output"><span style="color:var(--text3)">// Viết code rồi nhấn ✓ Kiểm tra</span></div>' +
    '</div>' +
    '<div class="challenge-result" id="cr-' + id + '"></div></div>';
}
var challengeTests = {};
function registerChallenge(id, testFn) { challengeTests[id] = testFn; }
function checkChallenge(id, btn) {
  var pg = btn.closest('.challenge').querySelector('[data-playground]');
  var editor = pg.querySelector('.playground-editor');
  var output = pg.querySelector('.playground-output');
  var result = document.getElementById('cr-' + id);
  var code = editor.value;
  // Run code and capture logs
  var logs = [];
  var origLog = console.log;
  console.log = function() { logs.push(Array.from(arguments).map(function(a){return typeof a==='object'?JSON.stringify(a):String(a)}).join(' ')); };
  try {
    new Function(code)();
    var testResult = challengeTests[id](logs, code);
    if (testResult.pass) {
      result.className = 'challenge-result pass';
      result.textContent = '✅ ' + testResult.msg;
      addXP(20);
    } else {
      result.className = 'challenge-result fail';
      result.textContent = '❌ ' + testResult.msg;
    }
  } catch(e) {
    result.className = 'challenge-result fail';
    result.textContent = '❌ Lỗi: ' + e.message;
  }
  console.log = origLog;
  renderOutput(output, logs.map(function(l){return {type:'log',text:l}}));
}

// ============================================
// ===== EXAM SYSTEM (no answers until submit) =
// ============================================
function buildExam(examId, title, timeMinutes, questions) {
  var html = '<div class="exam" id="exam-' + examId + '">';
  html += '<div class="exam-header"><div class="exam-title">📋 ' + title + '</div>';
  if (timeMinutes) html += '<div class="exam-timer" id="timer-' + examId + '">⏱ ' + timeMinutes + ':00</div>';
  html += '</div>';
  html += '<div class="exam-progress" id="prog-' + examId + '">';
  questions.forEach(function(q,i) { html += '<div class="dot" onclick="scrollToExamQ(\'' + examId + '\',' + i + ')">' + (i+1) + '</div>'; });
  html += '</div>';
  questions.forEach(function(q, qi) {
    html += '<div class="exam-q" id="eq-' + examId + '-' + qi + '" data-answer="' + q.answer + '">';
    html += '<div class="q-num">Câu ' + (qi+1) + '/' + questions.length + '</div>';
    html += '<div class="q-text">' + q.q + '</div>';
    html += '<div class="q-opts">';
    q.opts.forEach(function(opt, oi) {
      html += '<label onclick="selectExamAnswer(\'' + examId + '\',' + qi + ',' + oi + ')">';
      html += '<span class="radio-dot"></span>';
      html += '<span class="opt-letter">' + String.fromCharCode(65+oi) + '.</span> ' + opt;
      html += '</label>';
    });
    html += '</div>';
    html += '<div class="q-explain" id="expl-' + examId + '-' + qi + '">' + (q.explain || '') + '</div>';
    html += '</div>';
  });
  html += '<div class="exam-actions">';
  html += '<button class="btn-submit" id="submit-' + examId + '" onclick="submitExam(\'' + examId + '\',' + questions.length + ',' + (timeMinutes||0) + ')">📝 Nộp bài</button>';
  html += '<button class="btn-retry" id="retry-' + examId + '" onclick="retryExam(\'' + examId + '\')" style="display:none">🔄 Làm lại</button>';
  html += '</div>';
  html += '<div class="exam-score" id="score-' + examId + '" style="display:none"></div>';
  html += '</div>';
  return html;
}

var examAnswers = {}; // { examId: { 0: chosenIndex, 1: chosenIndex, ... } }
var examTimers = {};

function selectExamAnswer(examId, qi, oi) {
  // Check if already submitted
  var exam = document.getElementById('exam-' + examId);
  if (exam.classList.contains('submitted')) return;

  if (!examAnswers[examId]) examAnswers[examId] = {};
  examAnswers[examId][qi] = oi;

  // Update UI
  var qDiv = document.getElementById('eq-' + examId + '-' + qi);
  qDiv.classList.add('answered');
  var labels = qDiv.querySelectorAll('label');
  labels.forEach(function(l,i) {
    l.classList.toggle('selected', i === oi);
  });

  // Update progress dots
  var dots = document.querySelectorAll('#prog-' + examId + ' .dot');
  dots[qi].classList.add('filled');

  // Start timer on first answer
  var timerEl = document.getElementById('timer-' + examId);
  if (timerEl && !examTimers[examId]) {
    var timeStr = timerEl.textContent.match(/(\d+):(\d+)/);
    if (timeStr) {
      var totalSec = parseInt(timeStr[1]) * 60 + parseInt(timeStr[2]);
      startExamTimer(examId, totalSec);
    }
  }
}

function startExamTimer(examId, totalSec) {
  var timerEl = document.getElementById('timer-' + examId);
  if (!timerEl) return;
  examTimers[examId] = setInterval(function() {
    totalSec--;
    if (totalSec <= 0) {
      clearInterval(examTimers[examId]);
      timerEl.textContent = '⏱ Hết giờ!';
      timerEl.classList.add('urgent');
      // Auto submit
      var exam = document.getElementById('exam-' + examId);
      if (!exam.classList.contains('submitted')) {
        var total = exam.querySelectorAll('.exam-q').length;
        submitExam(examId, total, 0);
      }
      return;
    }
    var m = Math.floor(totalSec/60), s = totalSec%60;
    timerEl.textContent = '⏱ ' + m + ':' + (s<10?'0':'') + s;
    if (totalSec <= 60) timerEl.classList.add('urgent');
  }, 1000);
}

function scrollToExamQ(examId, qi) {
  var el = document.getElementById('eq-' + examId + '-' + qi);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function submitExam(examId, total, timeMin) {
  var exam = document.getElementById('exam-' + examId);
  var answers = examAnswers[examId] || {};

  // Check unanswered
  var unanswered = [];
  for (var i = 0; i < total; i++) {
    if (answers[i] === undefined) unanswered.push(i + 1);
  }
  if (unanswered.length > 0) {
    if (!confirm('Bạn chưa trả lời câu: ' + unanswered.join(', ') + '.\nVẫn muốn nộp bài?')) return;
  }

  // Stop timer
  if (examTimers[examId]) { clearInterval(examTimers[examId]); delete examTimers[examId]; }

  // Mark submitted
  exam.classList.add('submitted');
  document.getElementById('submit-' + examId).disabled = true;
  document.getElementById('submit-' + examId).style.display = 'none';
  document.getElementById('retry-' + examId).style.display = 'inline-block';

  // Grade
  var correct = 0;
  var qs = exam.querySelectorAll('.exam-q');
  var dots = document.querySelectorAll('#prog-' + examId + ' .dot');

  qs.forEach(function(qDiv, qi) {
    var correctAns = parseInt(qDiv.getAttribute('data-answer'));
    var chosen = answers[qi];
    var labels = qDiv.querySelectorAll('label');
    var explainDiv = document.getElementById('expl-' + examId + '-' + qi);

    // Disable clicking
    labels.forEach(function(l) { l.style.pointerEvents = 'none'; });

    // Reveal correct answer
    labels[correctAns].classList.add('reveal-correct');

    if (chosen === correctAns) {
      correct++;
      qDiv.classList.add('q-correct');
      dots[qi].classList.add('dot-correct');
      if (explainDiv.textContent) {
        explainDiv.classList.add('show', 'explain-correct');
        explainDiv.innerHTML = '✅ Chính xác! ' + explainDiv.textContent;
      }
    } else {
      qDiv.classList.add('q-wrong');
      dots[qi].classList.add('dot-wrong');
      if (chosen !== undefined) labels[chosen].classList.add('reveal-wrong');
      if (explainDiv.textContent) {
        explainDiv.classList.add('show', 'explain-wrong');
        explainDiv.innerHTML = '❌ Sai. ' + explainDiv.textContent;
      }
    }
  });

  // Show score
  var pct = Math.round(correct / total * 100);
  var scoreDiv = document.getElementById('score-' + examId);
  var grade, gradeText;
  if (pct >= 90) { grade = 'grade-a'; gradeText = '🏆 Xuất sắc!'; }
  else if (pct >= 70) { grade = 'grade-b'; gradeText = '👏 Giỏi lắm!'; }
  else if (pct >= 50) { grade = 'grade-c'; gradeText = '👍 Khá! Cần ôn thêm.'; }
  else { grade = 'grade-f'; gradeText = '💪 Chưa đạt. Hãy xem lại bài học!'; }

  scoreDiv.className = 'exam-score ' + grade;
  scoreDiv.style.display = 'block';
  scoreDiv.innerHTML = '<div class="score-num">' + correct + '/' + total + '</div>' +
    '<div class="score-label">' + pct + '% — ' + gradeText + '</div>' +
    '<div class="score-bar"><div class="score-fill" style="width:0%"></div></div>';

  // Animate score bar
  setTimeout(function() {
    scoreDiv.querySelector('.score-fill').style.width = pct + '%';
  }, 100);

  // XP reward
  if (pct >= 90) addXP(100);
  else if (pct >= 70) addXP(60);
  else if (pct >= 50) addXP(30);
  else addXP(10);

  // Phase gate: record if this is a phase gate exam
  if (pct >= 70) {
    var pgMatch = examId.match(/gate_phase(\d+)/);
    if (pgMatch) recordPhaseGatePass(parseInt(pgMatch[1]), 'exam');
  }

  // GA + Firebase tracking
  gaEvent('submit_exam', { exam_id: examId, score: pct, correct: correct, total: total });
  if (db && userId) {
    db.collection('submissions').add({
      userId: userId,
      userName: userName,
      exerciseId: examId,
      moduleId: active,
      type: 'exam',
      score: pct,
      correct: correct,
      total: total,
      grade: gradeText,
      pass: pct >= 50,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function(){});
  }
}

function retryExam(examId) {
  var exam = document.getElementById('exam-' + examId);
  exam.classList.remove('submitted');
  examAnswers[examId] = {};

  // Reset questions
  var qs = exam.querySelectorAll('.exam-q');
  qs.forEach(function(qDiv, qi) {
    qDiv.classList.remove('answered', 'q-correct', 'q-wrong');
    var labels = qDiv.querySelectorAll('label');
    labels.forEach(function(l) {
      l.classList.remove('selected', 'reveal-correct', 'reveal-wrong');
      l.style.pointerEvents = '';
    });
    var expl = document.getElementById('expl-' + examId + '-' + qi);
    expl.classList.remove('show', 'explain-correct', 'explain-wrong');
    // Restore original text
    expl.innerHTML = expl.textContent.replace(/^[✅❌] (Chính xác! |Sai\. )/, '');
  });

  // Reset progress dots
  var dots = document.querySelectorAll('#prog-' + examId + ' .dot');
  dots.forEach(function(d) { d.classList.remove('filled', 'dot-correct', 'dot-wrong'); });

  // Reset buttons
  document.getElementById('submit-' + examId).disabled = false;
  document.getElementById('submit-' + examId).style.display = '';
  document.getElementById('retry-' + examId).style.display = 'none';
  document.getElementById('score-' + examId).style.display = 'none';

  // Reset timer
  var timerEl = document.getElementById('timer-' + examId);
  if (timerEl) { timerEl.classList.remove('urgent'); }
  if (examTimers[examId]) { clearInterval(examTimers[examId]); delete examTimers[examId]; }
}

// ============================================
// ===== GAMIFICATION =====
// ============================================
// xpData is defined in index.html globals
var XP_LEVELS = [
  {name:'Newbie', min:0}, {name:'Beginner', min:50}, {name:'Learner', min:150},
  {name:'Coder', min:300}, {name:'Developer', min:500}, {name:'Pro', min:800},
  {name:'Expert', min:1200}, {name:'Master', min:2000}
];
function getLevel(xp) {
  for (var i = XP_LEVELS.length-1; i >= 0; i--) if (xp >= XP_LEVELS[i].min) return {level:i, name:XP_LEVELS[i].name, min:XP_LEVELS[i].min, next: XP_LEVELS[i+1] ? XP_LEVELS[i+1].min : XP_LEVELS[i].min};
  return {level:0, name:'Newbie', min:0, next:50};
}
function addXP(amount) {
  xpData.xp += amount;
  // Check streak
  var today = new Date().toISOString().split('T')[0];
  if (xpData.lastDate !== today) {
    var yesterday = new Date(Date.now()-86400000).toISOString().split('T')[0];
    xpData.streak = (xpData.lastDate === yesterday) ? xpData.streak + 1 : 1;
    xpData.lastDate = today;
  }
  localStorage.setItem('pw-xp', JSON.stringify(xpData));
  renderXP();
  checkAchievements();
}
function renderXP() {
  var lv = getLevel(xpData.xp);
  var pct = lv.next > lv.min ? Math.min(100, Math.round((xpData.xp - lv.min) / (lv.next - lv.min) * 100)) : 100;
  var bar = document.getElementById('xpBar');
  bar.innerHTML = '<div class="xp-row"><span class="level-badge">Lv.' + lv.level + ' ' + lv.name + '</span><span class="xp-num">' + xpData.xp + ' XP</span>' + (xpData.streak > 1 ? '<span class="streak-badge">🔥 ' + xpData.streak + ' ngày</span>' : '') + '</div><div class="xp-track"><div class="xp-fill" style="width:' + pct + '%"></div></div>';
}
var ACHIEVEMENTS = [
  {id:'first_run', icon:'🎯', name:'First Code!', desc:'Chạy playground lần đầu', check:function(){return xpData.xp >= 10;}},
  {id:'module3', icon:'📚', name:'JS Basics', desc:'Hoàn thành 3 modules', check:function(){var c=0;for(var k in completed)if(completed[k])c++;return c>=3;}},
  {id:'module7', icon:'🎓', name:'Halfway', desc:'Hoàn thành 7 modules', check:function(){var c=0;for(var k in completed)if(completed[k])c++;return c>=7;}},
  {id:'all', icon:'🏆', name:'Champion', desc:'Hoàn thành tất cả', check:function(){var c=0;for(var k in completed)if(completed[k])c++;return c>=D.length;}},
  {id:'streak3', icon:'🔥', name:'On Fire', desc:'Streak 3 ngày', check:function(){return xpData.streak >= 3;}},
  {id:'streak7', icon:'💎', name:'Dedicated', desc:'Streak 7 ngày', check:function(){return xpData.streak >= 7;}},
  {id:'xp100', icon:'⭐', name:'100 XP', desc:'Đạt 100 XP', check:function(){return xpData.xp >= 100;}},
  {id:'xp500', icon:'🌟', name:'500 XP', desc:'Đạt 500 XP', check:function(){return xpData.xp >= 500;}}
];
function checkAchievements() {
  ACHIEVEMENTS.forEach(function(a) {
    if (xpData.achievements.indexOf(a.id) === -1 && a.check()) {
      xpData.achievements.push(a.id);
      localStorage.setItem('pw-xp', JSON.stringify(xpData));
      showAchievement(a);
    }
  });
}
function showAchievement(a) {
  var toast = document.getElementById('achievementToast');
  toast.querySelector('.ach-icon').textContent = a.icon;
  toast.querySelector('.ach-text').innerHTML = '<strong>Achievement Unlocked!</strong><br>' + a.name + ' — ' + a.desc;
  toast.classList.add('show');
  setTimeout(function(){ toast.classList.remove('show'); }, 4000);
}

// ============================================
// ===== PHASE GATE SYSTEM =====
// ============================================
// Phase 0: Intro (M0) — always open
// Phase 1: JS & OOP (M1-M6) — always open
// Phase 2: Playwright (M7-M9) — requires Phase 1 gate passed
// Phase 3: Nâng cao (M10-M14) — requires Phase 2 gate passed
var gateData = JSON.parse(localStorage.getItem('pw-gates') || '{}');

function saveGateData() {
  localStorage.setItem('pw-gates', JSON.stringify(gateData));
}

function recordPhaseGatePass(phase, type) {
  // type: 'exam' or 'code'
  var key = type + '_phase' + phase;
  if (!gateData[key]) {
    gateData[key] = true;
    saveGateData();
    if (typeof renderSidebar === 'function') renderSidebar();
  }
}

function getPhaseGateStatus(phase) {
  return {
    examPassed: !!gateData['exam_phase' + phase],
    codePassed: !!gateData['code_phase' + phase]
  };
}

function isPhaseGatePassed(phase) {
  var gs = getPhaseGateStatus(phase);
  return gs.examPassed && gs.codePassed;
}

function isModuleUnlocked(moduleId) {
  // Gate modules (id=61, 91) are always accessible if their own phase is accessible
  var mod = null;
  for (var i = 0; i < D.length; i++) if (D[i].id === moduleId) { mod = D[i]; break; }
  if (!mod) return true;
  var phase = mod.phase;
  // Phase 0 and 1: always open
  if (phase <= 1) return true;
  // Phase 2: requires Phase 1 gate passed
  if (phase === 2) return isPhaseGatePassed(1);
  // Phase 3: requires Phase 2 gate passed
  if (phase === 3) return isPhaseGatePassed(2);
  return true;
}

function getRequiredGateForPhase(phase) {
  if (phase === 2) return 1;
  if (phase === 3) return 2;
  return 0;
}

// ============================================
// ===== MODULE TIME ESTIMATES =====
// ============================================
var MODULE_TIME = {0:10, 1:45, 2:40, 3:35, 4:45, 5:40, 6:35, 61:30, 7:30, 8:30, 9:35, 91:25, 10:30, 11:40, 12:45, 13:40, 14:35};
