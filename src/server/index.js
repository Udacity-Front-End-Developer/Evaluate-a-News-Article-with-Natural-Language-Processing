const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const _port = 3000;

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'));
});

app.listen(_port, () => console.log(`Server is live at port: ${_port}`));
