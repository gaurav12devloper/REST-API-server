import books from './data/apiData.js';
import connectDB from './config/db.js';
import crudModel from './models/crudModel.js';
import dotenv from 'dotenv'; // to use .env file for that 
dotenv.config();

await connectDB();
const importData = async () => {
    try {
        await crudModel.deleteMany();
        await crudModel.insertMany(books);
        console.log('Data Imported');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
const destroyData = async () => {
    try {
        await crudModel.deleteMany();
        console.log('Data Destroyed');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}