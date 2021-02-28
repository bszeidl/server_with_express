const express = require('express');
const router = express.Router();
const students = require('../../data/students.json');

router.get('/', (req, res) => {
	res.send(students);
});


router.get('/:a', (req, res) => {
	const result = students.some(student => student.id === parseInt(req.params.a));

	if (result) {
		res.send(students.filter(student => student.id === parseInt(req.params.a)));
	} else {
		res.status(404).send({ message: `The student with id: ${req.params.a} not found`});
	}	
});

module.exports = router;