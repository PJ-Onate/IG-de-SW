const Boleta = require('../Modelos/boleta');

const crearBoleta = (req, res) => {
    const {tipoBoleta, montoBoleta, fechaBoleta} = req.body;
    const nuevaBoleta = new Boleta({
        tipoBoleta,
        montoBoleta,
        fechaBoleta
    });
 
nuevaBoleta.save((err, boletas) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear boleta"})
    }
    return res.status(201).send(boletas)
});
}

const updateBoleta = (req, res) => {
    const {id} = req.params 
    Boleta.findByIdAndUpdate(id,req.body, (err, boletas) => {
        if(err){
            return res.status(400).send({message: "Error al obtener la boleta"})
        }
        if(!boletas){
            return res.status(404).send({message: "Error: boleta no encontrada"})
        }
        return res.status(201).send(boletas)
    })
}

const getBoletas = (req, res) => {
    Boleta.find({}, (err, boletas) => {
        if(err){
            return res.status(400).send({message: "ERROR: Boletas no encontradas"})
        }
        return res.status(200).send(boletas)
    })
}

const getBoletaEspecifica = (req, res) =>{
    const {id} = req.params; 
    Boleta.findById(id, (err, boletas) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR: al obtener la boleta"})
        }
        if(!boletas){
            return res.status(404).send({message: "ERROR: boleta no encontrada"})
        }
        return res.status(200).send(boletas)
    })
}

const deleteBoleta = (req, res) => {
    const {id} = req.params;
    Boleta.findByIdAndDelete(id, (err, boletas) => {
        if(err){
            return res.status(400).send({message: "Error al borrar la boleta"})
        }
        if(!boletas){
            return res.status(404).send({message: "Boleta no encontrada"})
        }
        return res.status(200).send(boletas)
    })
}

module.exports={
    crearBoleta,
    updateBoleta,
    getBoletas,
    getBoletaEspecifica,
    deleteBoleta
}
