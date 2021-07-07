const errorMessage = (error) => {
	document.querySelector('.error').innerHTML = error;
};

export { errorMessage };
