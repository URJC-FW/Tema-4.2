import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        name: "World"
    });
});

router.get('/checkInfo', (req, res) => {

    let info = req.query.info;

    let response = {
        valid: false,
        message: `Info '${info}' not valid`
    }

    res.json(response);
});

export default router;