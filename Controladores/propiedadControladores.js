const Propiedad = require('../Modelos/propiedad');
const agregarPropiedad = (req) => {
    const {costo, ubicacion} = req.body;
    const nuevaPropiedad = new Propiedad({
        costo,
        ubicacion,
    });

    nuevaPropiedad.save((err, propiedadModelo) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear propiedad"})
    }
    return res.status(201).send(propiedadModelo)
});
}

/*const getEstado = (req, res) => {
    estadoModelo.find({}, (err, modelos) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudieron obtener los estados"})
        }
        return res.status(200).send(modelos)
    })
}

const updateEstado = (req, res) => {
    const {id} = req.params;
    estadoModelo.findByIdAndUpdate(id,req.body, (err, estados) => {
        if(err){
            return res.status(400).send({message: "Error al obtener el estado"})
        }
        if(!estados){
            return res.status(404).send({message: "Vecino no encontrado"})
        }
        return res.status(200).send(estados)
    })
}*/

module.exports={
    agregarPropiedad
    //getEstado,
    //updateEstado
}