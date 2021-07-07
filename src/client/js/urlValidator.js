const isUrlValid = (url) => {
	let regex = /^(http|https):\/\/[^ "]+$/;
	return regex.test(url);
};

export { isUrlValid };
