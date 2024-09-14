const express = require('express');
const { register, login, logout} = require('../controller/patientsController');
const patientsRouter = express.Router();
const {isAuthenticated} =  require('../auth/auth')

// Register Route
patientsRouter.post('/register', register);

// Login Route
patientsRouter.get('/login', login);

// Logout Route
patientsRouter.get('/logout',isAuthenticated, logout);

// Make Appointment Route
// patientsRouter.post('/appointment', makeAppointment);

module.exports = patientsRouter;
