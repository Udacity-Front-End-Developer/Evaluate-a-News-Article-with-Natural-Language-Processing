import './styles/vars.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';

// let input = document.querySelector('#text').value;
const sendDataToServer = async (data, event) => {
	event.target.classList.add('loading');
	event.target.setAttribute('disabled', '');
	const response = await fetch('/analyze', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
		event.target.classList.remove('loading');
		event.target.removeAttribute('disabled');
		const data = await response.json();
		console.log(data);
		return;
	} catch (error) {
		console.log('error', error);
	}
};

document.querySelector('.form__btn').addEventListener('click', (e) => {
	e.preventDefault();
	// let formData = new FormData(document.querySelector('.form'));
	// console.log(formData);
	sendDataToServer({ link: document.querySelector('#text').value }, e);
});
