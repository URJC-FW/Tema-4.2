import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        name: "World"
    });
});

router.post('/saveRandom', (req, res) => {

    let info = req.query.key;

    let response = {
        value: Math.ceil(Math.random() * 100)
    }

    res.json(response);
});

export default router;