const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const _port = 3000;
let _dataObj = {};

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'));
});

app.post('/analyze', (req, res) => {
	(async () => {
		_dataObj = await require('./apiCall')(process.env.API_KEY, req.body.link);
		res.send(_dataObj);
	})();
});

app.listen(_port, () => console.log(`Server is live at port: ${_port}.`));
