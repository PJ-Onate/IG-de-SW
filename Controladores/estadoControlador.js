const estado = require('../Modelos/estado');
const crearEstado = (req, res) => {
    const {descripcion} = req.body;
    const nuevoEstado = new Estado({
        descripcion
    });

    nuevoEstado.save((err, estado) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear el estado"})
        }
        return res.status(200).sed(estado)
    })
}
const getEstados = (req, res)=> {
    Estado.find({},(err, estados) => {
        if(err){
            return res.status(400).send ({message: "Error al obtener estados"})
        }
        return res.status(200).send(estados)
    })
}


module.exports={
    crearEstado,
    getEstados
}


