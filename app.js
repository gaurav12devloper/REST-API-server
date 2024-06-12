import express from 'express';
import dotenv from 'dotenv'; // to use .env file for that 
dotenv.config();
import connectDB from './config/db.js'; // import the connectDB function from db.js
import crudRoutes from './routes/crudRoutes.js';
import {join} from 'path'; // to join path
const app = express();
const port=process.env.PORT || 3000;

// Connect to database
await connectDB(); // call the connectDB function

// Body parser midlleware
app.use(express.json());
app.use(express.urlencoded({extended:true})); // urlencoded is used to parse the data coming from the form

// setup for static files
app.use(express.static(join(process.cwd(),'public'))); // now you can access public folder files

// Routes
app.use('/api',crudRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});