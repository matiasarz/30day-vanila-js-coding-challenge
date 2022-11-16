const playSound = (e) => {
	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
	const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
	if (!audio || !key) return;
	audio.currentTime = 0;
	audio.play();

	key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');

const removeTransition = (e) => {
	if (e.propertyName !== 'transform') return;
	keys.forEach((key) => key.classList.remove('playing'));
};

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
