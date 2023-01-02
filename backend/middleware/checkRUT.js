const Vecino = require ("../Modelos/vecino");

const checkRUT = (req, res, next) => {
    Vecino.findOne({rut: req.body.rut}), (err, vecino) =>{
        if (err){
            return res.status(400).send({ message: "Error al obtener al vecino "})
        }
        if (!vecino){
            return res.status(404).send({ message: "El vecino no existe "})      
        }
        return res.status(200).send({ message: "Usuario logeado correctamente "}) 
    }
}

module.exports = checkRUT