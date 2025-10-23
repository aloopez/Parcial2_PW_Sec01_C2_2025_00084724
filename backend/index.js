
import express from 'express';
import router from './routes/cuentas.routes.js';

const app = express(); // Crear una instancia de la aplicación Express
const PORT = 3130 // Puerto dicho en la guia

app.use('/', router); // Usar las rutas definidas en el router

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
