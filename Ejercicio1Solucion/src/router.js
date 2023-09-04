import express from 'express';
import { getSuperheroes } from './superheroes.js';

const router = express.Router();

router.get('/', (req, res) => {

    const superheroes = getSuperheroes(0,3);

    res.render('index', {
        superheroes: superheroes
    });
});

router.get('/superheroes', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const superheroes = getSuperheroes(from,to);

    res.render('superheroes', {
        superheroes: superheroes
    });
});

export default router;