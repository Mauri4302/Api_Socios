const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

const socioRoutes = require('./routes/SocioRouter');
const auditorRoutes = require('./routes/AuditorRouter');
const numeroISORoutes = require('./routes/NumeroISORouter');
const intermediarioRoutes = require('./routes/IntermediarioRouter');

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api/socios', socioRoutes);
app.use('/api/auditores', auditorRoutes);
app.use('/api/numerosISO', numeroISORoutes);
app.use('/api/intermediarios', intermediarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));