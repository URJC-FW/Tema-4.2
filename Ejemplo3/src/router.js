import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        name: "World"
    });
});

router.post('/saveRandom', (req, res) => {

    let info = req.body.key;

    let response = {
        key: info,
        value: Math.ceil(Math.random() * 100)
    }

    res.json(response);
});

export default router;