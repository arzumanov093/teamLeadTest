// timer

let time = 1800;

const countElement = document.getElementById('timer');
setInterval(updateCount, 1000);

function updateCount() {
	let min = Math.floor(time / 60),
		sec = time % 60;

	sec = sec < 10 ? '0' + sec : sec;

	countElement.innerHTML = `${min}:${sec}`;
	time--;

	if (sec == 0 && min == 0) {
		countElement.innerHTML = 'Акция завершена!'
		time = 1800
	}
}


// anchor

let anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', (e) => {
		e.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// prompt

const promptName = document.querySelector('.form__prompt-name'),
	inpName = document.querySelector('input[name="name"]'),
	promptPhone = document.querySelector('.form__prompt-phone'),
	inpPhone = document.querySelector('input[name="phone"]'),
	form = document.querySelector('.form');

inpName.addEventListener('focus', () => {
	promptName.classList.remove('hide')
	promptPhone.classList.add('hide')
});

inpPhone.addEventListener('focus', () => {
	promptName.classList.add('hide')
	promptPhone.classList.remove('hide')
});

form.addEventListener('submit', () => {
	promptName.classList.add('hide')
	promptPhone.classList.add('hide')
})