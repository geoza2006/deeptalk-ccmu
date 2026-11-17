const questions = [
  ['เข้าใจชนบท', 'อะไรทำให้เราเลือกเข้ามาอยู่ในชมรมชนบท?'],
  ['เข้าใจชนบท', 'ในความคิดของเรา คำว่า “ชนบท” มีความหมายว่าอะไร?'],
  ['เข้าใจชนบท', 'เราคิดว่าจุดประสงค์ที่แท้จริงของการออกค่ายชนบทคืออะไร?'],
  ['เข้าใจชนบท', 'ถ้าไม่มีรูปถ่าย ไม่มีเกียรติบัตร ไม่มีใครรู้ว่าเราไปทำอะไรมา เรายังอยากออกค่ายไหม เพราะอะไร?'],
  ['เข้าใจชนบท', 'เราคิดว่าชาวบ้านหรือโรงเรียนจะได้อะไรจากการที่พวกเราไปจัดค่าย?'],
  ['เข้าใจชนบท', 'เราคิดว่าตัวเราเองได้อะไรจากชุมชน มากกว่าสิ่งที่เราเข้าไปมอบให้?'],
  ['ทีมและความสัมพันธ์', 'เราคิดว่าเพื่อนร่วมทีมทุกคนมีคุณค่าเท่ากันไหม แม้แต่คนที่ไม่ได้มีบทบาทสำคัญ?'],
  ['ทีมและความสัมพันธ์', 'เรารู้จักความรู้สึกของเพื่อนร่วมทีมทุกคนมากแค่ไหน?'],
  ['ทีมและความสัมพันธ์', 'ถ้าเพื่อนคนหนึ่งทำงานไม่ทัน เราจะคิดว่าเขาไม่รับผิดชอบก่อน หรือจะถามว่าเขาเจออะไรมา?'],
  ['ทีมและความสัมพันธ์', 'ถ้าวันหนึ่งเราเป็นคนที่ถูกมองข้ามในทีม เราอยากให้เพื่อนปฏิบัติกับเราอย่างไร?'],
  ['ผู้นำและการทำงาน', 'ประธานค่ายมีหน้าที่เพียงบริหารงานให้สำเร็จ หรือมีหน้าที่ดูแลคนในทีมด้วย?'],
  ['ผู้นำและการทำงาน', 'ผู้นำที่ดีควรทำให้ทุกคนเชื่อฟัง หรือทำให้ทุกคนกล้าพูดความจริง?'],
  ['ผู้นำและการทำงาน', 'ถ้าเราเป็นคนตัดสินใจ แล้วมีคนในทีมไม่เห็นด้วย เราจะเปิดใจรับฟังเขาแค่ไหน?'],
  ['ผู้นำและการทำงาน', 'ถ้าทุกคนในทีมเงียบเวลาที่เราพูด เราคิดว่านั่นหมายถึงทุกคนเห็นด้วยจริง ๆ หรือเปล่า?'],
  ['ความรู้สึกและการเปิดใจ', 'มีอะไรในการทำค่ายที่ทำให้เรารู้สึกกดดันมากที่สุด?'],
  ['ความรู้สึกและการเปิดใจ', 'เวลาเราเหนื่อยกับงาน เราอยากให้เพื่อนปฏิบัติกับเราอย่างไร?'],
  ['ความรู้สึกและการเปิดใจ', 'เราเคยรู้สึกไม่กล้าพูดเพราะกลัวว่าคนอื่นจะไม่พอใจไหม?'],
  ['ความรู้สึกและการเปิดใจ', 'เราคิดว่าความสัมพันธ์ในทีมสำคัญพอที่จะยอมลดทิฐิของตัวเองไหม?'],
  ['ทีมและความสัมพันธ์', 'ถ้าเพื่อนสองกลุ่มมีความขัดแย้งกัน เราคิดว่าเราควรยืนอยู่ฝั่งไหน?'],
  ['ทีมและความสัมพันธ์', 'เราคิดว่าการพูดถึงคนอื่นลับหลังส่งผลต่อความไว้วางใจในทีมอย่างไร?'],
  ['ทีมและความสัมพันธ์', 'เราสามารถแยกความไม่ชอบส่วนตัวออกจากการทำงานร่วมกันได้จริงไหม?'],
  ['ผู้นำและการทำงาน', 'ถ้าทุกคนในทีมเห็นด้วยกับสิ่งหนึ่ง แต่เราคิดว่ามันไม่ถูกต้อง เราจะทำอย่างไร?'],
  ['ทีมและความสัมพันธ์', 'ถ้ามีเพื่อนคนหนึ่งไม่ค่อยมีบทบาทในทีม เราจะช่วยให้เขามีส่วนร่วมอย่างไร?'],
  ['ความรู้สึกและการเปิดใจ', 'ถ้าเราทำงานหนักมาก แต่ไม่มีใครเห็นความพยายามของเรา เราจะรู้สึกอย่างไร?'],
  ['ทีมและความสัมพันธ์', 'ถ้าเพื่อนสองคนทะเลาะกันจนกระทบงาน เราจะทำอย่างไร?'],
  ['ความรู้สึกและการเปิดใจ', 'ถ้าเราเป็นคนที่ทำให้เพื่อนในทีมไม่กล้าแสดงความคิดเห็น เราอยากให้เพื่อนบอกเราไหม?']
];

let deck = [];
let currentIndex = 0;
let startX = 0;
let startY = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function categoryName(value) {
  const names = {
    all: 'รวมทุกหมวด',
    understand: 'เข้าใจชนบท',
    team: 'ทีมและความสัมพันธ์',
    leadership: 'ผู้นำและการทำงาน',
    feelings: 'ความรู้สึกและการเปิดใจ'
  };
  return names[value];
}

function buildDeck() {
  const selected = $('#category').value;
  const filtered = selected === 'all'
    ? questions
    : questions.filter(([category]) => category === categoryName(selected));

  if (filtered.length === 0) {
    showToast('ไม่พบคำถามในหมวดนี้');
    return false;
  }

  deck = shuffle(filtered);
  currentIndex = 0;
  renderQuestion();
  return true;
}

function renderQuestion() {
  const [category, text] = deck[currentIndex];

  $('#questionNumber').textContent = String(currentIndex + 1).padStart(2, '0');
  $('#questionCounter').textContent = (currentIndex + 1) + ' / ' + deck.length;
  $('#questionText').textContent = text;
  $('#categoryPill').textContent = category;
  $('#gameCategory').textContent = categoryName($('#category').value);
  $('#progressBar').style.width = ((currentIndex + 1) / deck.length * 100) + '%';
}

function nextQuestion(direction) {
  if (currentIndex >= deck.length - 1) {
    finishGame();
    return;
  }

  const distance = direction === 'skip' ? -110 : 110;
  const rotation = direction === 'skip' ? -8 : 8;

  card.style.transform = 'translateX(' + distance + '%) rotate(' + rotation + 'deg)';
  card.style.opacity = '0';

  window.setTimeout(() => {
    currentIndex += 1;
    card.style.transition = 'none';
    card.style.transform = 'translateX(0)';
    renderQuestion();

    requestAnimationFrame(() => {
      card.style.transition = 'transform .24s ease, opacity .24s ease';
      card.style.opacity = '1';
    });
  }, 220);
}

function finishGame() {
  $('#questionText').textContent = 'ครบทุกคำถามแล้ว ✨';
  $('#questionCounter').textContent = 'จบแล้ว';
  $('#progressBar').style.width = '100%';
  showToast('จบชุดคำถามแล้ว');
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function startGame() {
  const hasQuestions = buildDeck();

  if (!hasQuestions) {
    return;
  }

  $('#startScreen').hidden = true;
  $('#gameScreen').hidden = false;
  $('#gameScreen').setAttribute('aria-hidden', 'false');
}

function exitGame() {
  $('#gameScreen').hidden = true;
  $('#startScreen').hidden = false;
  $('#gameScreen').setAttribute('aria-hidden', 'true');
}

function enterFocusMode() {
  $('#gameScreen').classList.add('focus-mode');
  document.body.classList.add('focus-active');
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
  showToast('โหมดเต็มหน้าจอคำถาม');
}

function exitFocusMode() {
  $('#gameScreen').classList.remove('focus-mode');
  document.body.classList.remove('focus-active');
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

function initialiseApp() {
  const card = $('#questionCard');

  if (!card) {
    return;
  }

  card.addEventListener('pointerdown', (event) => {
    startX = event.clientX;
    startY = event.clientY;
    card.setPointerCapture(event.pointerId);
  });

  card.addEventListener('pointerup', (event) => {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) {
      nextQuestion(deltaX < 0 ? 'skip' : 'answer');
    }
  });

  $('#startButton').addEventListener('click', startGame);
  $('#skipButton').addEventListener('click', () => nextQuestion('skip'));
  $('#answerButton').addEventListener('click', () => nextQuestion('answer'));
  $('#restartButton').addEventListener('click', startGame);
  $('#exitButton').addEventListener('click', exitGame);
  $('#focusButton').addEventListener('click', enterFocusMode);
  $('#focusExitButton').addEventListener('click', exitFocusMode);
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && $('#gameScreen').classList.contains('focus-mode')) {
      $('#gameScreen').classList.remove('focus-mode');
      document.body.classList.remove('focus-active');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseApp);
} else {
  initialiseApp();
}
