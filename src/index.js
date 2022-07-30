import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import {db} from './utils/database.js';

const app = express();

const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(cors({ exposedHeaders: ['x-session-id'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    console.log('Hello From App 👋');
});

db;

app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}! 🌏🚀`));
