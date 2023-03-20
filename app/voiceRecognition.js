const attemptElement = document.getElementById('attempt');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const attempt = event.results[0][0].transcript;
  showAttemptOnScreen(attempt);
  attemptIsValid(attempt);
}

function showAttemptOnScreen(attempt) {
  attemptElement.innerHTML = `
    <div>You say:</div>
    <span class="box">${attempt}</span>
  `
}

recognition.addEventListener('end', () => recognition.start());
