//crudController.js

const CRUDModel = require('../models/crudModel');
// const axios = require('axios');
const baseURL =  process.env.FRONTEND_BASE_URL 
// 
// Ay, ay, ay, ay, Canta y no llores🎤🎹🎺🎺🎺
//Funciones de CRUD de los Usuarios

//CREATE
async function saveCrud(req, res) {
    const { crud } = req.body; 

    // Verificar si los campos requeridos están presentes antes de intentar guardar
    if (!crud || !crud.name || !crud.email) {
        return res.status(400).send({ error: "Debe proporcionar 'name' y 'email' en el cuerpo de la solicitud." });
    }

    CRUDModel.create({ crud })
        .then((data) => {
            console.log("Save Successful");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: err, msg: "Ups, algo sale mal en la creación del controlador" });
        });
}

//READ
async function getCrud(req, res){
    const crud = await CRUDModel.find()
    res.send(crud)
    
}

//UPDATE
const updateCrud = async (req, res) => {
    try {
        const { id } = req.params;
        const { crud } = req.body;

        console.log('ID:', id);
        console.log('Updated Data:', crud);

        const updatedData = await CRUDModel.findByIdAndUpdate(id, crud, { new: true });

        console.log('Updated Data:', updatedData);

        res.send(updatedData);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err, msg: "Ups, algo salió mal en la actualización del controlador" });
    }
};
//DELETE
async function deleteCrud(req, res) {
    const {id}= req.params
    CRUDModel.findByIdAndDelete(id)
    .then(()=>res.send("deleted!!"))
    // updateOne({_id: id},{$set:{crud}})
    .catch((err)=>{
    console.log(err)
    res.send({error: err, msg:"upss, algo sale mal en Delete del controlador"})
    })
}

module.exports = { getCrud, saveCrud, updateCrud, deleteCrud };
