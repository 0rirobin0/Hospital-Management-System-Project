const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY; // Store securely in env

exports.isAdmin = (req, res, next) => {
  // Get the token from the cookie
  const token = req.cookies.admintoken;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No Admintoken provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.admin = decoded; // Attach user ID to the request object
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid Admin token' });
  }
};
