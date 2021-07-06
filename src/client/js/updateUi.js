const updateUi = (data) => {
	let resultContainer = document.querySelector('.results__data');
	// If container has some data in it, empty it.
	if (resultContainer.hasChildNodes()) {
		resultContainer.innerHTML = '';
	}
	let fragment = document.createDocumentFragment();
	const dataEntries = Object.entries(data);
	for (const [entry, state] of dataEntries) {
		let li = document.createElement('li');
		li.innerHTML = `<span style="color: hotpink;">${entry.toUpperCase()}:</span> ${state}`;
		fragment.appendChild(li);
	}
	resultContainer.appendChild(fragment);
};

export { updateUi };
