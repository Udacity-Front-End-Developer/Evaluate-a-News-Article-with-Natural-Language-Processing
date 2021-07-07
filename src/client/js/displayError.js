const displayError = (error) => {
	document.querySelector('.error').innerHTML = `Oops! ${error}`;
	document.querySelector('#text').classList.toggle('invalid');
};

export { displayError };
