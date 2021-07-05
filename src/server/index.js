const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const _port = 3000;
let dataObj = {};

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'));
});

app.post('/analyze', (req, res) => {
	console.log(req.body.link);
	(async () => {
		dataObj = await require('./apiCall')(process.env.API_KEY, req.body.link);
		console.log(dataObj);
		res.send(dataObj);
	})();
});

app.listen(_port, () => console.log(`Server is live at port: ${_port}`));
