import './styles/vars.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/results.scss';

import { getData } from './js/getData.js';
import { updateUi } from './js/updateUi.js';
import { isUrlValid } from './js/urlValidator.js';
import { errorMessage } from './js/errorMessage.js';
import { formHandler } from './js/formHandler.js';
export { formHandler, getData, updateUi, isUrlValid, errorMessage };

document.querySelector('#text').addEventListener('input', (e) => {
	if (e.target.value.length > 1) {
		document.querySelector('.form__btn').removeAttribute('disabled');
	} else {
		document.querySelector('.form__btn').setAttribute('disabled', '');
	}
});
document.querySelector('.form__btn').addEventListener('click', (e) => {
	Client.formHandler(e);
});
