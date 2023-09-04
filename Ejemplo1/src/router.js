import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        name: "World"
    });
});

router.get('/pagePart', (req, res) => {

    res.render('pagePart', {
        info: "Part"
    });
});

export default router;