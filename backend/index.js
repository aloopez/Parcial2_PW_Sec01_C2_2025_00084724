
import express from 'express';
import router from './routes/cuentas.routes.js';
const app = express();
const PORT = 3130

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

