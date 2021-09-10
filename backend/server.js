import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';
import posts from './routes/postsRoutes.js';
import users from './routes/usersRoutes.js';
import uploads from './routes/uploadRoutes.js';
import errorHandler from './middleware/error.js';
import helmet from 'helmet'
dotenv.config();
connectDB();

const app = express();
app.use(helmet())
app.use(express.json());

app.use('/api/v1/posts', posts);
app.use('/api/v1/users', users);
app.use('/api/v1/upload', uploads);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      });
}

app.use(errorHandler);

let port = process.env.PORT || 5000
app.listen(
    port,
    console.log(`Server Running in ${process.env.NODE_ENV} on port ${port}`)
);
