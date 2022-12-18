const estadoModelo = require('../Modelos/estados');
const crearEstado = (req, res) => {
    const {descripcion, numEstado} = req.body;
    const nuevoEstado = new estadoModelo({
        descripcion,
        numEstado
    });

nuevoEstado.save((err, estadoModelo) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear estado o ya esta registrado"})
    }
    return res.status(201).send(estadoModelo)
});
}

const getEstado = (req, res) => {
    estadoModelo.find({}, (err, modelos) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudieron obtener los estados"})
        }
        return res.status(200).send(modelos)
    })
}

const updateEstado = (req, res) => {
    const {descripcion} = req.params;  //buscar por nombre
    estadoModelo.findOneAndUpdate({descripcion : descripcion},req.body, (err, estados) => {
        if(err){
            return res.status(400).send({message: "Error al obtener el estado"})
        }
        if(!estados){
            return res.status(404).send({message: "Estado no encontrado"})
        }
        return res.status(200).send(estados)
    })
}

const deleteEstado = (req, res) => {
    const {descripcion} = req.params;  //buscar por nombre
    estadoModelo.findOneAndDelete({descripcion : descripcion}, (err, estados) => {
        if(err){
            return res.status(400).send({message: "Error al obtener el estado"})
        }
        if(!estados){
            return res.status(404).send({message: "Estado no encontrado"})
        }
        return res.status(200).send(estados)
    })
}

module.exports={
    crearEstado,
    getEstado,
    updateEstado,
    deleteEstado
}