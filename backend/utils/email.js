const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

const sendEmail = async ({ name, email, message }) => {
    try {
        await transporter.sendMail({
            from: config.email.user,
            to: config.email.user,
            subject: `个人网站新消息 - 来自 ${name}`,
            html: `
                <h3>新消息通知</h3>
                <p><strong>姓名：</strong> ${name}</p>
                <p><strong>邮箱：</strong> ${email}</p>
                <p><strong>消息：</strong></p>
                <p>${message}</p>
            `
        });
        return true;
    } catch (error) {
        console.error('发送邮件失败:', error);
        return false;
    }
};

module.exports = { sendEmail }; 