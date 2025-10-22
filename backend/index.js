
const express = require('express');
const cuentaRoutes = require('./routes/cuentas.routes.js');
const app = express();
const PORT = 3130

app.use('/', cuentaRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

