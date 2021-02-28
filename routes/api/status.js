const express = require('express');
const router = express.Router();
const students = require('../../data/students.json');

router.get('/:statusName', (req, res) => {	
	if (req.params.statusName === 'active') { //ha a requested paraméter értéke active
		res.send(students.filter(student => student.status === true)); //szűrje ki a tömb elemeinek azon tagjait, melyek status értéke true
	} else if (req.params.statusName === 'finished') {
		res.send(students.filter(student => student.status === false));
	} else {
		res.status(404).send({ message: `The student with status: ${req.params.statusName} not found`});
	}
});

module.exports = router;