const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config/config');

// 路由导入
const contactRouter = require('./routes/contact');
const worksRouter = require('./routes/works');

const app = express();

// 中间件
app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务
app.use(express.static(path.join(__dirname, '../frontend')));

// API路由
app.use('/api/contact', contactRouter);
app.use('/api/works', worksRouter);

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: '服务器内部错误'
    });
});

// 启动服务器
app.listen(config.port, () => {
    console.log(`服务器运行在端口 ${config.port}`);
});

module.exports = app; 