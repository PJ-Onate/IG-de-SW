const vecino = require('../Modelos/vecino');
const Vecino = require('../Modelos/vecino');
const { deuda } = require('./gastoComunControlador');
const crearVecino = (req, res) => {
    const {nombre, apellido, rut, telefono, email, estados, deuda} = req.body;
    const nuevoVecino= new Vecino({
        nombre,
        apellido,
        rut,
        telefono,
        email,
        estados,
        deuda
    });
    nuevoVecino.save((err, Vecino) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear al vecino o RUT/EMAIL ya estan registrados"})
        }
        return res.status(201).send(Vecino)
    })
}

const updateVecino = (req, res) => {
    const {rut} = req.params;  //BUSQUEDA POR EL RUT
    Vecino.findOneAndUpdate({rut : rut}, req.body, (err, vecinos) => {
        if(err){
            return res.status(400).send({message: "Error al obtener al vecino"})
        }
        if(!vecinos){
            return res.status(404).send({message: "Vecino no encontrado"})
        }
        return res.status(201).send(vecinos)
    })
}

const getVecinos = (req, res) => {
  Vecino.find({}, (err, vecinos)=>{
    if(err){
        return res.status(400).send({message: "Error al obtener los vecinos"})
    }
    console.log(vecinos)
    return res.status(200).send(vecinos)
  })
}

const deleteVecino = (req, res) => {
    const {rut} = req.params;
    Vecino.findOneAndDelete({rut: rut}, (err, vecinos) => {
        if(err){
            return res.status(400).send({message: "Error al obtener al vecino"})
        }
        if(!vecinos){
            return res.status(404).send({message: "Vecino no encontrado"})
        }
        return res.status(200).send(vecinos)
    })
}

const getVecinoEspecifico = (req, res) =>{
    const {rut} = req.params;
    Vecino.findOne({rut : rut}, (err, vecinos) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR al obtener al vecino"})
        }
        if(!vecinos){
            return res.status(404).send({message: "ERROR: vecino no encontrado"})
        }
        return res.status(200).send(vecinos)
    })
}

function buscarVecino(String){
    Vecino.findOne({rut: String}).populate('vecino').exec(function(err,vecino){
        if(err){
            console.log("Error");
        }
        return vecino.deuda;
    })
}


module.exports={
    crearVecino,
    updateVecino,
    getVecinos,
    deleteVecino,
    getVecinoEspecifico,
    buscarVecino,
}
