import { displayError } from '..';

const updateUi = (data) => {
	// If container has some data in it, empty it.
	let resultContainer = document.querySelector('.results__data');
	if (resultContainer.hasChildNodes()) {
		resultContainer.innerHTML = '';
	}
	// Check for the status of the api's response.
	if (data.status.code > 200) {
		return Client.displayError(data.status.msg);
	}
	// Extract the desired data from the main object.
	const desiredData = (({ agreement, subjectivity, confidence, irony }) => ({
		agreement,
		subjectivity,
		confidence,
		irony,
	}))(data);
	let fragment = document.createDocumentFragment();
	const dataEntries = Object.entries(desiredData);
	for (const [entry, state] of dataEntries) {
		let li = document.createElement('li');
		li.innerHTML = `<span style="color: hotpink;">${entry.toUpperCase()}:</span> ${state}`;
		fragment.appendChild(li);
	}
	resultContainer.appendChild(fragment);
};

export { updateUi };
