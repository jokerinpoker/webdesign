require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    email: {
        service: 'gmail',
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    cors: {
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
        credentials: true
    }
}; 