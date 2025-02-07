const express = require('express');
const app = express();

// Puerto donde correrá el servidor
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Node.js con Express!');
});

const people = [
  { id: 1, name: 'Jorge Hurtado', age: 41, country: 'México' },
  { id: 2, name: 'Ana Pérez', age: 35, country: 'Colombia' },
  { id: 3, name: 'Carlos López', age: 28, country: 'Argentina' },
  { id: 4, name: 'Lucía Martínez', age: 32, country: 'España' },
  { id: 5, name: 'Miguel Ramírez', age: 45, country: 'Chile' },
];

// Endpoint GET que retorna el array de personas
app.get('/api/personas', (req, res) => {
  res.json({
    success: true,
    data: people,
  });
});

app.get('/api/perros', (req, res) => {
  const dogs = [
    { id: 1, name: 'Max', breed: 'Labrador' },
    { id: 2, name: 'Bella', breed: 'Golden Retriever' },
  ];
  res.json(dogs);
});

// Endpoint POST para agregar una persona nueva
app.post('/api/personas', (req, res) => {
  const newPerson = req.body;

  // Asignar un ID único (simulación)
  newPerson.id = people.length + 1;

  // Guardar en la "base de datos"
  people.push(newPerson);

  // Responder con el mensaje de éxito y la persona guardada
  res.json({
    success: true,
    message: 'Guardado exitoso',
    data: newPerson,
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
