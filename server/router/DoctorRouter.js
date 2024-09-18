const express = require('express');
const doctorRouter = express.Router();
const {  login, logout} = require('../controller/doctorController');
const { isDoctor } = require('../auth/auth');






// Login Route
doctorRouter.post('/login', login);

// Logout Route
doctorRouter.get('/logout',isDoctor, logout);


 
                                  //==== Services ====




module.exports = doctorRouter;