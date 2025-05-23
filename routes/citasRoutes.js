const express = require('express');
const router = express.Router();
const Cita = require('../models/Cita');

router.post('/', async (req, res) => {
  const { nombreCompleto, cedula, correo, especialidad, doctor, ubicacion, fecha } = req.body;
  if (!nombreCompleto || !cedula || !correo || !fecha) {
    return res.status(400).json({ error: 'Campos obligatorios faltantes', estado: 'Rechazada' });
  }
  const fechaCita = new Date(fecha.split('-').reverse().join('-'));
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  if (fechaCita < hoy) {
    return res.status(400).json({ error: 'Fecha inválida', estado: 'Rechazada' });
  }
  const cita = new Cita({ nombreCompleto, cedula, correo, especialidad, doctor, ubicacion, fecha, estado: 'Confirmada' });
  await cita.save();
  res.status(201).json(cita);
});

router.get('/usuario/:correo', async (req, res) => {
  const citas = await Cita.find({ correo: req.params.correo });
  res.json(citas);
});

router.patch('/cancelar/:id', async (req, res) => {
  const cita = await Cita.findByIdAndUpdate(req.params.id, { estado: 'Cancelada' }, { new: true });
  res.json(cita);
});

router.get('/estado/:estado', async (req, res) => {
  const citas = await Cita.find({ estado: req.params.estado });
  res.json(citas);
});

module.exports = router;