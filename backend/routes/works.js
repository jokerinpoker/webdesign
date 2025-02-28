const express = require('express');
const router = express.Router();

// 作品数据 - 后续可以迁移到数据库
const works = [
    {
        id: 1,
        title: '响应式网站设计',
        description: '使用HTML5、CSS3和JavaScript开发的现代响应式网站',
        image: '/images/work1.jpg',
        link: 'https://project1.com',
        technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        id: 2,
        title: 'React应用开发',
        description: '基于React和Redux的单页面应用',
        image: '/images/work2.jpg',
        link: 'https://project2.com',
        technologies: ['React', 'Redux', 'Node.js']
    },
    {
        id: 3,
        title: '移动端APP设计',
        description: '使用React Native开发的跨平台移动应用',
        image: '/images/work3.jpg',
        link: 'https://project3.com',
        technologies: ['React Native', 'Firebase']
    }
];

// 获取所有作品
router.get('/', (req, res) => {
    try {
        res.json({
            success: true,
            data: works
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '获取作品列表失败'
        });
    }
});

// 获取单个作品详情
router.get('/:id', (req, res) => {
    try {
        const work = works.find(w => w.id === parseInt(req.params.id));
        if (!work) {
            return res.status(404).json({
                success: false,
                message: '作品未找到'
            });
        }
        res.json({
            success: true,
            data: work
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '获取作品详情失败'
        });
    }
});

module.exports = router; 