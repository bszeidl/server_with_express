const express = require('express');
const app = express();
const port = 3000;
const moment = require('moment');

//port és dátum-idő loggolása, mely esemény hatására a terminálba ír:
const logger = (req, res, next) => {
	console.log(
		`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}		
	`	);
	next();
};

app.use(logger);

app.get('/', (req, res) => {
	res.send(
		`<h1>Hello World!  It's Codecool! </h1>
		`);		
});


app.use('/api/students', require('./routes/api/persons'));
app.use('/api/status', require('./routes/api/status'));


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})

