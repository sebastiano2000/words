import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/employees', postRoutes);

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://sebastiano:sebastiano123@cluster0.2sgrysq.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
