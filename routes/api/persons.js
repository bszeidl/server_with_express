const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const students = require('../../data/students.json');

//get all students
router.get('/', (req, res) => {
	res.send(students);
});

//get one students by ID
router.get('/:a', (req, res) => {
	const result = students.some(student => student.id === parseInt(req.params.a));

	
	if (result) {
		res.send(students.filter(student => student.id === parseInt(req.params.a)));
	} else {
		res.status(404).send({ message: `The student with id: ${req.params.a} not found`});
	}	
});

//create a new student, in the server file body parser initialization is needed

router.post('/:a', (req, res) => {
	const newStudent = {
		id: uuid.v4(),
		name: req.body.name,
		status: true
	};

	if (!newStudent.name) {
		return res.status(400).json({ msg: 'Please include name!'});
	}

	students.push(newStudent);
	res.json(students);
});

module.exports = router;