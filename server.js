import colors from 'colors';
import { notFound, errorHandler } from './middleware/error.js';
import productRoute from './routes/productRoute.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import  express from 'express';


const app = express();
dotenv.config()
connectDB();
dotenv.config()

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/products', productRoute);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT, 
    console.log(
      `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);