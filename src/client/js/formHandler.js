import { displayError } from '..';

const formHandler = (event) => {
	event.preventDefault();
	event.target.classList.add('loading');
	event.target.setAttribute('disabled', '');
	let url = document.querySelector('#text').value;
	// Check for valid input.
	if (Client.isUrlValid(url)) {
		// If url is valid get data.
		(async () => {
			let response = await Client.getData({ link: url }, '/analyze', event);
			try {
				event.target.classList.remove('loading');
				event.target.removeAttribute('disabled');
				// Update UI
				Client.updateUi(response);
			} catch (error) {
				displayError(error);
			}
		})();
	} else {
		// If url is not valid display error.
		event.target.classList.remove('loading');
		event.target.removeAttribute('disabled');
		Client.displayError('URL not valid!');
	}
};

export { formHandler };
