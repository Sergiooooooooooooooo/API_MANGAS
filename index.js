import express from 'express';
import { routerMangas } from './routes/index.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log('Middleware');
    next();
})

routerMangas(app)

app.listen(4000, () => {
    console.log('Server is running on port 4000');   
})