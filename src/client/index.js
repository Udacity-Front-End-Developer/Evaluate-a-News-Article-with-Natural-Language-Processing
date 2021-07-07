import './styles/vars.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/button.scss';
import './styles/errorMessage.scss';
import './styles/form.scss';
import './styles/results.scss';

import { getData } from './js/getData.js';
import { updateUi } from './js/updateUi.js';
import { isUrlValid } from './js/urlValidator.js';
import { displayError } from './js/displayError.js';
import { formHandler } from './js/formHandler.js';
export { formHandler, getData, updateUi, isUrlValid, displayError };

document.querySelector('#text').addEventListener('input', (e) => {
	if (e.target.value.length > 1) {
		document.querySelector('.error').innerHTML = '';
		document.querySelector('.form__btn').removeAttribute('disabled');
		document.querySelector('#text').classList.remove('invalid');
	} else {
		document.querySelector('.form__btn').setAttribute('disabled', '');
	}
});

document.querySelector('.form__btn').addEventListener('click', (e) => {
	Client.formHandler(e);
});
