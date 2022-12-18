const Casa = require('../Modelos/casa');
const crearCasa = (req, res) => {
    const {numCasa, vecino} = req.body;
    const nuevaCasa= new Casa({
        numCasa,
        vecino
    });
    nuevaCasa.save((err, Casa) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear la casa"})
        }
        return res.status(201).send(Casa)
    })
}

const updateCasa = (req, res) => {
    const {numCasa} = req.params  //Hacerlo por num de casa
    Casa.findOneAndUpdate({numCasa : numCasa},req.body, (err, casas) => {
        if(err){
            return res.status(400).send({message: "Error al obtener la casa"})
        }
        if(!casas){
            return res.status(404).send({message: "Error: Casa no encontrada"})
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
    const {numCasa} = req.params  //Hacerlo por el num de casa
    Casa.findById({numCasa : numCasa}, (err, casas) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR: al obtener la casa"})
        }
        if(!casas){
            return res.status(404).send({message: "ERROR: casa no encontrada"})
        }
        return res.status(200).send(casas)
    })
}

module.exports={
    crearCasa,
    updateCasa,
    getCasas,
    getCasaEspecifica
}