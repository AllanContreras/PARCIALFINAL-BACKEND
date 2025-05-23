require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const app = express();
app.use(cors());
app.use(express.json());

const citasRoutes = require('./routes/citasRoutes');
const especialidadesRoutes = require('./routes/especialidadesRoutes');

app.use('/api/citas', citasRoutes);
app.use('/api/especialidades', especialidadesRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err));