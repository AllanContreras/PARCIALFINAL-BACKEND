const express = require('express');
const router = express.Router();
const Especialidad = require('../models/Especialidad');

router.get('/', async (req, res) => {
  const especialidades = await Especialidad.find();
  res.json(especialidades);
});

module.exports = router;