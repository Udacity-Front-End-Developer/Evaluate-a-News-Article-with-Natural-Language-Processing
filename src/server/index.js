const express = require('express');
const path = require('path');
const _port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'));
	// res.sendFile(path.resolve('src/client/views/index.html'));
});
app.listen(_port, () => console.log(`Server is live at port: ${_port}`));
