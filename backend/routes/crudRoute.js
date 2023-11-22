//crudRoute.js
const {Router} = require('express');
const router = Router();

const { getCrud, saveCrud, updateCrud, deleteCrud} = require('../controllers/crudController');

//rutas del backend al crud
router.get("/get", getCrud)
router.post("/save", saveCrud)
router.put("/update/:id", updateCrud)
router.delete("/delete/:id", deleteCrud)


module.exports = router;
