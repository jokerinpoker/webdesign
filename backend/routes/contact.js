const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/email');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 简单的输入验证
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: '请填写所有必填字段'
            });
        }

        // 发送邮件
        const emailSent = await sendEmail({ name, email, message });

        if (emailSent) {
            res.json({
                success: true,
                message: '消息已发送'
            });
        } else {
            throw new Error('邮件发送失败');
        }
    } catch (error) {
        console.error('处理联系表单错误:', error);
        res.status(500).json({
            success: false,
            message: '发送失败，请稍后重试'
        });
    }
});

module.exports = router; 