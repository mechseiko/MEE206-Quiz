const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Secret key for token verification
const secretKey = 'your-very-secure-secret-key';

// Token verification endpoint
app.post('/verify-token', (req, res) => {
    const { token } = req.body;

    try {
        const decoded = jwt.verify(token, secretKey);
        if (decoded.admin) {
            return res.status(200).json({ success: true, message: 'Token is valid.' });
        } else {
            return res.status(403).json({ success: false, message: 'Access denied.' });
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});