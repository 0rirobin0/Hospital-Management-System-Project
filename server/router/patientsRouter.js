const express = require('express');
const { register, login, logout, getAllDoctors, createAppointment, getAppointmentsByPatientId, getDoctorById} = require('../controller/patientsController');
const patientsRouter = express.Router();
const {isPatient} =  require('../auth/auth')

// Register Route
patientsRouter.post('/register', register);

// Login Route
patientsRouter.get('/login', login);

// Logout Route
patientsRouter.get('/logout',isPatient, logout);
                                //  ====== SERVICES ==========
// Make Appointment Route
patientsRouter.post('/createappointment',isPatient,createAppointment );
// My all appointments
patientsRouter.get('/myappointment',isPatient,getAppointmentsByPatientId );
// get all doctor
 patientsRouter.get('/alldoctor',isPatient, getAllDoctors);
//  get Doctor By Id
patientsRouter.get('/getdoctor/:doctor_id',isPatient, getDoctorById);



module.exports = patientsRouter;
