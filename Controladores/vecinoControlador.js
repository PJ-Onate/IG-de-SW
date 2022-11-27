const Vecino = require('../Modelos/vecino');
const crearVecino = (req, res) => {
    const {nombre, apellido, rut, email, estado, deudaAcumulada} = req.body;
    const nuevoVecino= new Vecino({
        nombre,
        apellido,
        rut,
        email,
        estado,
        deudaAcumulada
    });
    nuevoVecino.save((err, Vecino) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear al vecino o RUT/EMAIL ya estan registrados"})
        }
        return res.status(201).send(Vecino)
    })
}

const updateVecino = (req, res) => {
    const {id} = req.params;  //BUSQUEDA POR EL RUT
    Vecino.findByIdAndUpdate(id, req.body, (err, vecinos) => {
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
    return res.status(200).send(vecinos)
  })
}

const deleteVecino = (req, res) => {
    const {id} = req.params;
    Vecino.findOneAndDelete(id, (err, vecinos) => {
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
    const {id} = req.params;
    Vecino.findById(id, (err, vecinos) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR al obtener al vecino"})
        }
        if(!vecinos){
            return res.status(404).send({message: "ERROR: vecino no encontrado"})
        }
        return res.status(200).send(vecinos)
    })
}

module.exports={
    crearVecino,
    updateVecino,
    getVecinos,
    deleteVecino,
    getVecinoEspecifico
}