const condominio = require('../Modelos/condominio');
const crearCondominio = (req, res) => {
    const {nombreCondominio, direccionCondominio, ciudadCondominio, casa} = req.body;
    const nuevoCondominio= new Condominio({
        nombreCondominio,
        direccionCondominio,
        ciudadCondominio,
        casa
    });
    nuevoCondominio.save((err, condominio) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudo crear condominio"})
        }
        return res.status(201).send(condominio)
    })
}


const getCondominio = (req, res) => {
    Casa.find({}, (err, condominios) => {
        if(err){
            return res.status(400).send({message: "ERROR: Condominios no encontrados"})
        }
        return res.status(200).send(condominios)
    })
}

module.exports={
    crearCondominio,
    getCondominio
}

