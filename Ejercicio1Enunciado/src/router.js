import express from 'express';
import { getSuperheroes } from './superheroes.js';

const router = express.Router();

router.get('/', (req, res) => {

    const superheroes = getSuperheroes();

    res.render('index', {
        superheroes: superheroes
    });
});

export default router;