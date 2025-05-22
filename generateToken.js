const jwt = require('jsonwebtoken');

const generateToken = () => {
    const secretKey = 'your-very-secure-secret-key'; // Replace with your actual secret key
    const token = jwt.sign({ admin: true }, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
    console.log('Token:', token);
};

generateToken();