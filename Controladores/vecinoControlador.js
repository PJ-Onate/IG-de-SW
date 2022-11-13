const Vecino = require('../Modelos/vecino');
const crearVecino = (req, res) => {
    const {rut,nombre,domicilio,numDomicilio} = req.body;
    const nuevoVecino= new Vecino({
        rut,
        nombre,
        domicilio,
        numDomicilio
    });
    nuevoVecino.save((err, Vecino) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear el estado"})
        }
        return res.status(201).send(Vecino)
    })
}

const updateVecino = (req, res) => {
    const {id} = req.params;
    Vecino.findByIdAndUpdate(id,req.body, (err, vecinos) => {
        if(err){
            return res.status(400).send({message: "Error al obtener al vecino"})
        }
        if(!vecinos){
            return res.status(404).send({message: "Vecino no encontrado"})
        }
        return res.status(200).send(vecinos)
    })
}
const getVecinos = (req, res) => {
    Vecino.find({}, (err, vecinos) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudieron obtener los vecinos"})
        }
        return res.status(200).send(vecinos)
    })
}

const deleteVecino = (req, res) => {
    const {id} = req.params;
    Vecino.findByIdAndDelete(id, (err, vecinos) => {
        if(err){
            return res.status(400).send({message: "Error al obtener al vecino"})
        }
        if(!vecinos){
            return res.status(404).send({message: "Vecino no encontrado"})
        }
        return res.status(200).send(vecinos)
    })
}

module.exports={
    crearVecino,
    updateVecino,
    getVecinos,
    deleteVecino
}