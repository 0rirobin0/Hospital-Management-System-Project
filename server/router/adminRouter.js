const express = require('express');
const adminRouter = express.Router();
const { register, login, logout} = require('../controller/adminController');
const { isAdmin } = require('../auth/auth');
const { addDoctor, getAllDoctors, getAllPatients } = require('../controller/adminController');




// Register Route
adminRouter.post('/register', register);

// Login Route
adminRouter.get('/login', login);

// Logout Route
adminRouter.get('/logout',isAdmin, logout);


                                  // Patients Related Route

 adminRouter.get('/allpatient',isAdmin, getAllPatients);

                                  // Doctor Related Route

// add Doctor
adminRouter.post('/adddoctor',isAdmin, addDoctor);
// get all Doctor
adminRouter.get('/alldoctor',isAdmin, getAllDoctors);



module.exports = adminRouter;