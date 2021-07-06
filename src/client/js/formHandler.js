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
			document.querySelector('.results__data').innerHTML = response.agreement;
		} catch (error) {}
	})();
};

export { formHandler };
