const getData = async (data, event) => {
	const response = await fetch('/analyze', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('error', error);
	}
};

export { getData };