const fetch = require('node-fetch');

module.exports = async (key, link) => {
	let hostname = `https://api.meaningcloud.com`;
	let path = `/sentiment-2.1?key=${key}&url=${link}&model=general&lang=en`;
	const response = await fetch(`${hostname}${path}`);
	const data = await response.json();
	try {
		return {
			agreement: data.agreement,
			subjectivity: data.subjectivity,
			confidence: data.confidence,
			irony: data.irony,
		};
	} catch (error) {
		console.log(error);
	}
};
