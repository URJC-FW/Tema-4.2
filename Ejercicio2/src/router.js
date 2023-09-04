import express from 'express';

const router = express.Router();

let existingUsernames = [ 'user23', 'pepito', 'juan' ];

router.get('/', (req, res) => {

    res.render('index', {
        name: "World"
    });
});

router.get('/availableUsername', (req, res) => {

    let username = req.query.username;

    let availableUsername = existingUsernames.indexOf(username) === -1;

    let response = {
        available: availableUsername
    }

    res.json(response);
});

export default router;