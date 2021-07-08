const app = require('./app');
const _port = 3000;

app.listen(_port, () => console.log(`Listening at http://localhost:${_port}.`));
