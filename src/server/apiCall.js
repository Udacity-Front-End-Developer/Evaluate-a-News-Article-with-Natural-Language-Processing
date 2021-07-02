module.exports = async (key, text) => {
	let baseURL = `https://api.meaningcloud.com/sentiment-2.1`;
	let fullURL = `${baseURL}?key=${key}&of=json&txt=${text}&model=general&lang=en`;
	const res = await fetch(fullURL);
	try {
		const data = await res.json();
		return data;
	} catch (error) {
		return error;
	}
};
