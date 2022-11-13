const Vecino = require('../Modelos/vecino');
const crearVecino = (req, res) => {
    const {rut,nombre,domicilio,numDomicilio} = req.body;
    const nuevoVecino= new Estado({
        rut,
        nombre,
        domicilio,
        numDomicilio
    });
    nuevoVecino.save((err, estado) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear el estado"})
        }
        return res.status(200).sed(estado)
    })
}



module.exports={
    crearVecino
}