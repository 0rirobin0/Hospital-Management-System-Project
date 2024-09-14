require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../db/db'); // Database connection
const jwt = require('jsonwebtoken');

// user Registration

exports.register = async (req, res) => {
  const { name, phone, age, password } = req.body;

  // Check if the phone number already exists
  const checkPhoneSql = `SELECT * FROM patients WHERE phone = ?`;
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

      const sql = `INSERT INTO patients (name, phone, age, password) VALUES (?, ?, ?, ?)`;
      db.query(sql, [name, phone, age, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Error during registration' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
      });
    } catch (error) {
      return res.status(500).json({ error: 'Error hashing password' });
    }
  });
};

// user Login


exports.login = (req, res) => {
    const { phone, password } = req.body;
  
    const sql = `SELECT * FROM patients WHERE phone = ?`;
    db.query(sql, [phone], async (err, result) => {
      if (err || result.length === 0) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const user = result[0];
      const validPassword = await bcrypt.compare(password, user.password);
  
      if (!validPassword) {
        return res.status(400).json({ error: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  
      // Send token as a cookie
      res.cookie('token', token, {
        httpOnly: true, // Prevent client-side access to the cookie
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 3600000, // 1 hour
      });
  
      res.status(200).json({ message: 'Login successful' });
    });
  };


  exports.logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
  };
  