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
module.exports={
    crearVecino
}