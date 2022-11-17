const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDay = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const min = now.getMinutes();
	const hour = now.getHours();

	const secondsDegrees = (seconds / 60) * 360 + 90;
	const minDegrees = (min / 60) * 360 + 90;
	const hourDegrees = ((hour % 12) / 12) * 360 + 90;

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDay, 1000);
