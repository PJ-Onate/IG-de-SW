const Vecino = require('../Modelos/vecino');
const crearVecino = (req, res) => {
    const {rut,nombre,domicilio,numDomicilio} = req.body;
    const nuevoEstado = new Estado({
        rut,
        nombre,
        domicilio,
        numDomicilio
    });
}

module.exports={
    crearVecino
}