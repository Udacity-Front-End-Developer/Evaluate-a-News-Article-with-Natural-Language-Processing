import './styles/vars.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/results.scss';

import { getData } from './js/getData.js';
import { updateUi } from './js/updateUi.js';
import { formHandler } from './js/formHandler.js';
export { formHandler, getData, updateUi };

document.querySelector('.form__btn').addEventListener('click', (e) => {
	Client.formHandler(e);
});
