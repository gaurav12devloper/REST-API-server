import express from 'express';
const router = express.Router();
import { createRecord, getAllRecord, getRecord, updateRecord, deleteRecord } from '../controllers/crudController.js';


router.route('/create').post(createRecord); // create a new record
router.route('/getAll').get(getAllRecord); // get all records
router.route('/:id').get(getRecord);     // get a single record
router.route('/update/:id').put(updateRecord);   // update a record
router.route('/delete/:id').delete(deleteRecord); // delete a record

export default router;