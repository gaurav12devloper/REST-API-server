import crudModel from "../models/crudModel.js";

//@des   Create a new crud
//@route  POST /api/crud
//@access Public
const createRecord = async (req, res) => {
    try {
        const data = new crudModel({
            name: req.body.name,
            img: req.body.img,
            summary: req.body.summary
        });
        await data.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@des   Get all cruds
//@route  GET /api/crud
//@access Public
const getAllRecord = async (req, res) => {
    try {
        const data = await crudModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@des   Get a crud
//@route  GET /api/crud/:id
//@access Public
const getRecord = async (req, res) => {
    try {
        const data = await crudModel.findById(req.params.id);
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@des   Update a crud
//@route  PUT /api/crud/:id
//@access Public
const updateRecord = async (req, res) => {
    try {
        const crud = await crudModel.findById(req.params.id);
        if (crud) {
            crud.name = req.body.name || crud.name;
            crud.img = req.body.img || crud.img;
            crud.summary = req.body.summary || crud.summary;

            const updatedCrud = await crud.save();
            res.json(updatedCrud);
        } else {
            res.status(404).json({ message: 'record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@des   Delete a crud
//@route  DELETE /api/crud/:id
//@access Public
const deleteRecord = async (req, res) => {
    try {
        const data = await crudModel.findById(req.params.id);
        if (data) {
            await data.deleteOne({ _id: data._id });
            res.json({ message: 'removed data' });
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createRecord, getAllRecord, getRecord, updateRecord, deleteRecord};
