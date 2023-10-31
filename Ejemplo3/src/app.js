import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import router from './router.js';

const app = express();

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), ".html");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static(__dirname + '/../public'));

app.use('/', router);

app.listen(3000, () => console.log('Listening on port 3000!'));