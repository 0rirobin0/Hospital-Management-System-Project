require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../db/db'); // Database connection
const jwt = require('jsonwebtoken');


// Admin Registration  //Not Allowed from frontend

exports.register = async (req, res) => {
    const {phone, password } = req.body;
  
    // Check if the phone number already exists
    const checkPhoneSql = `SELECT * FROM admin WHERE phone = ?`;
    db.query(checkPhoneSql, [phone], async (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
  
      // If phone number already exists
      if (result.length > 0) {
        return res.status(400).json({ error: 'Phone number already registered' });
      }
  
      // If phone number is not in the database, proceed with registration
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const sql = `INSERT INTO admin (phone, password) VALUES (?, ?)`;
        db.query(sql, [ phone, hashedPassword], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Error during registration' });
          }
          res.status(201).json({ message: 'Admin registered successfully!' });
        });
      } catch (error) {
        return res.status(500).json({ error: 'Error hashing password' });
      }
    });
  };
  
  // Admin Login
  
  
  exports.login = (req, res) => {
      const { phone, password } = req.body;
    
      const sql = `SELECT * FROM admin WHERE phone = ?`;
      db.query(sql, [phone], async (err, result) => {
        if (err || result.length === 0) {
          return res.status(400).json({ error: 'Admin not found' });
        }
    
        const Admin = result[0];
        const validPassword = await bcrypt.compare(password, Admin.password);
    
        if (!validPassword) {
          return res.status(400).json({ error: 'Invalid password' });
        }
    
        // Generate JWT token
        const token = jwt.sign({ id: Admin.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    
        // Send token as a cookie
        res.cookie('admintoken', token, {
          httpOnly: true, // Prevent client-side access to the cookie
          secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
          maxAge: 3600000, // 1 hour
        });
    
        res.status(200).json({ message: 'Login successful' });
      });
    };
  

//   Admin Logout

    exports.logout = (req, res) => {
      res.clearCookie('admintoken');
      res.status(200).json({ message: 'Logout successful' });
    };
    
                           // ===== Admin Services=====

  // get All Patients
  exports.getAllPatients = (req, res) => {
    const sql = 'SELECT patient_id,name,phone,age FROM patients';
    
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      
      res.status(200).json({
        message: 'Patients retrieved successfully',
        data: results
      });
    });
  };
  




// Add Doctor

exports.addDoctor = async (req, res) => {
    const { name, phone, age, department, qualification, gender, specialist } = req.body;
  
    // Check if the phone number already exists
    const checkPhoneSql = `SELECT * FROM doctor WHERE phone = ?`;
    db.query(checkPhoneSql, [phone], async (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
  
      // If phone number already exists
      if (result.length > 0) {
        return res.status(400).json({ error: 'Phone number already registered' });
      }
  
      // If phone number is not in the database, proceed with registration
      try {
       
  
        const sql = `INSERT INTO doctor (name, phone, age, department, qualification, gender, specialist) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(sql, [name, phone, age, department, qualification, gender, specialist], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Error during registration' });
          }
          res.status(201).json({ message: 'Doctor registered successfully!' });
        });
      } catch (error) {
        return res.status(500).json({ error: 'Error hashing password' });
      }
    });
  };
  
  // get All Doctor
  exports.getAllDoctors = (req, res) => {
    const sql = 'SELECT * FROM doctor';
    
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      
      res.status(200).json({
        message: 'Doctors retrieved successfully',
        data: results
      });
    });
  };
  

