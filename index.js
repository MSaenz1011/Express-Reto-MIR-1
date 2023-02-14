const express = require('express');
const app = express();
const port= 8080;

app.get('/users', (req, res) => {
  res.status(200).send({
		"message": "Curso encontrado satisfactoriamente",
		"top":{
			"version_top": 27,
			"students": 10,
			"names": [
				"Oscar", 
				"Nicolas", 
				"Jean", 
				"Diego", 
				"Camilo", 
				"Michael",
				"Andres",
				"Sebastian"
			]
		}
})
});


app.listen(port, () => console.log(`Listening on Port ${port}`));