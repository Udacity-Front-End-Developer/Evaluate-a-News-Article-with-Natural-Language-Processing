const getData = async (data = {}, path = '') => {
	const response = await fetch(path, {
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
		// TODO: Handles error properly
	}
};

export { getData };
