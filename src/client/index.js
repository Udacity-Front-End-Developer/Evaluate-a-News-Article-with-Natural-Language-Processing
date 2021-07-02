import './styles/vars.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';

const fetchData = async () => {
	const response = await fetch('/analyze');
	try {
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('error', error);
	}
};
document.querySelector('.form__btn').addEventListener('click', async (e) => {
	e.preventDefault();
	console.log('clicked');
	fetchData();
});
