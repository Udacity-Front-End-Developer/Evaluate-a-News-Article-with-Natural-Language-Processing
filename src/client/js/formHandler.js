const formHandler = (event) => {
	event.preventDefault();
	// Check for valid input
	event.target.classList.add('loading');
	event.target.setAttribute('disabled', '');
	let url = document.querySelector('#text');
	(async () => {
		let response = await Client.getData({ link: url.value }, event);
		try {
			event.target.classList.remove('loading');
			event.target.removeAttribute('disabled');
			// Update UI
			Client.updateUi(response);
		} catch (error) {}
	})();
};

export { formHandler };
