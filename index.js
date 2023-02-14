const express = require('express');
const app = express();
const port= 8080;

app.get('/my-first-endpoint', (req, res) => {
  const data={
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
}
    res.status(200).json(data)
});

app.listen(port, () => console.log(`Listening on Port ${port}`));