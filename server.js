const express = require('express');
let students = require('./data/students.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send(
		`<h1>Hello World!  It's Codecool! </h1>
		`);		
})

app.get('/students', (req, res) => {
	res.send(students);
})

app.get('/students/1', (req, res) => {
	res.send(students[0]);
})

app.get('/status/active', (req, res) => {
	let active;
	res.send(
		students.filter(item => JSON.stringify(item).includes(true))	
		);
})

app.get('/status/finished', (req, res) => {
	let active;
	res.send(
		students.filter(item => JSON.stringify(item).includes(false))
		
	);
})




app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})

