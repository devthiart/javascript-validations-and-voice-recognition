const attemptElement = document.getElementById('attempt');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const attempt = event.results[0][0].transcript;
  console.log(event);
  showAttemptOnScreen(attempt);
}

function showAttemptOnScreen(attempt) {
  attemptElement.innerHTML = `
    <div>You say:</div>
    <span class="box">${attempt}</span>
  `
}
