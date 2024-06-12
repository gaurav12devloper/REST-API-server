import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
});

const crudModel = mongoose.model('crud', crudSchema);
export default crudModel;
