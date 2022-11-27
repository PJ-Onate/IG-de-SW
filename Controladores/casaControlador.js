const Casa = require('../Modelos/casa');

const crearCasa = (req, res) => {
    const {numCasa, direccion, precio, mCuadrados, vecino} = req.body;
    const nuevaCasa = new Casa({
        numCasa,
        direccion,
        precio,
        mCuadrados,
        vecino
    });
 
nuevaCasa.save((err, casas) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear casa o ya está registrada"})
    }
    return res.status(201).send(casas)
});
}

const updateCasa = (req, res) => {
    const {id} = req.params 
    Casa.findByIdAndUpdate(id,req.body, (err, casas) => {
        if(err){
            return res.status(400).send({message: "Error al obtener la casa"})
        }
        if(!casas){
            return res.status(404).send({message: "Error: casa no encontrada"})
        }
        return res.status(201).send(casas)
    })
}

const getCasas = (req, res) => {
    Casa.find({}, (err, casas) => {
        if(err){
            return res.status(400).send({message: "ERROR: Casas no encontradas"})
        }
        return res.status(200).send(casas)
    })
}

const getCasaEspecifica = (req, res) =>{
    const {id} = req.params; 
    Casa.findById(id, (err, casas) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR: al obtener la casa"})
        }
        if(!casas){
            return res.status(404).send({message: "ERROR: boleta no encontrada"})
        }
        return res.status(200).send(casas)
    })
}

const deleteCasa = (req, res) => {
    const {id} = req.params;
    Casa.findByIdAndDelete(id, (err, casas) => {
        if(err){
            return res.status(400).send({message: "Error al borrar la casa"})
        }
        if(!casas){
            return res.status(404).send({message: "Casa no encontrada"})
        }
        return res.status(200).send(casas)
    })
}

module.exports={
    crearCasa,
    updateCasa,
    getCasas,
    getCasaEspecifica,
    deleteCasa
}