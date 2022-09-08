import colors from 'colors';
import { notFound, errorHandler } from './middleware/error.js';
import dealsRoute from './routes/dealsRoute.js';
import brandRoute from './routes/brandRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import productRoute from './routes/productRoute.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import  express from 'express';


const app = express();
dotenv.config()
connectDB();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/brands', brandRoute); 
app.use('/api/deals', dealsRoute);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT, 
    console.log(
      `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);