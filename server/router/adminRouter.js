const express = require('express');
const adminRouter = express.Router();
const { register, login, logout} = require('../controller/adminController');
const { isAdmin } = require('../auth/adminAuth');



// Register Route
adminRouter.post('/register', register);

// Login Route
adminRouter.get('/login', login);

// Logout Route
adminRouter.get('/logout',isAdmin, logout);



module.exports = adminRouter;