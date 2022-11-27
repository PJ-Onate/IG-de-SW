const gastoComun = require('../Modelos/gastoComun');

const crearGastoComun = (req, res) => {
    const {vecino, boleta, montoGastoComun} = req.body;
    const nuevoGastoComun = new gastoComun({
        vecino,
        boleta,
        montoGastoComun
    });
 
nuevoGastoComun.save((err, gastos) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear GC o ya está registrado"})
    }
    return res.status(201).send(gastos)
});
}

const updateGastoComun = (req, res) => {
    const {id} = req.params 
    gastoComun.findByIdAndUpdate(id,req.body, (err, gastos) => {
        if(err){
            return res.status(400).send({message: "Error al obtener el gasto"})
        }
        if(!casas){
            return res.status(404).send({message: "Error: gasto no encontrado"})
        }
        return res.status(201).send(gastos)
    })
}

const getGastosComunes = (req, res) => {
    gastoComun.find({}, (err, gastos) => {
        if(err){
            return res.status(400).send({message: "ERROR: Gastos no encontradas"})
        }
        return res.status(200).send(gastos)
    })
}

const getGastoComunEspecifico = (req, res) =>{
    const {id} = req.params; 
    gastoComun.findById(id, (err, gastos) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR: al obtener el gasto"})
        }
        if(!gastos){
            return res.status(404).send({message: "ERROR: gasto no encontrado"})
        }
        return res.status(200).send(gasto)
    })
}

const deleteGastoComun = (req, res) => {
    const {id} = req.params;
    Casa.findByIdAndDelete(id, (err, gastos) => {
        if(err){
            return res.status(400).send({message: "Error al borrar el gasto"})
        }
        if(!gastos){
            return res.status(404).send({message: "Gasto no encontrado"})
        }
        return res.status(200).send(gastos)
    })
}

module.exports={
    crearGastoComun,
    updateGastoComun,
    getGastosComunes,
    getGastoComunEspecifico,
    deleteGastoComun
}