const formHandler = (event) => {
	event.preventDefault();
	event.target.classList.add('loading');
	event.target.setAttribute('disabled', '');
	let url = document.querySelector('#text');
	// Check for valid input
	if (Client.isUrlValid(url.value)) {
		(async () => {
			let response = await Client.getData({ link: url.value }, event);
			try {
				event.target.classList.remove('loading');
				event.target.removeAttribute('disabled');
				// Update UI
				Client.updateUi(response);
			} catch (error) {}
		})();
	} else {
		Client.errorMessage('URL not valid!');
	}
};

export { formHandler };
