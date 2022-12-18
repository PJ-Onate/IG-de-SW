const gastoComun = require('../Modelos/gastoComun');
const vecino = require('../Modelos/vecino');
const crearGastoComun = (req, res) => {
    const {nombreGastoComun, montoGastoComun, vecino} = req.body;
    const nuevoGastoComun = new gastoComun({
        nombreGastoComun,
        montoGastoComun,
        vecino
    });
    
nuevoGastoComun.save((err, gastoComun) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear gasto comun o ya está registrado"})
    }
    return res.status(201).send(gastoComun)
});
}

const getGastoComun = (req, res) => {
    gastoComun.find({}, (err, gastoComunes) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudieron obtener los gastos comunes"})
        }
        return res.status(200).send(gastoComunes)
    })
}

const updateGastoComun = (req, res) => {
    const {nombreGastoComun} = req.params; //buscar por nombre
    gastoComun.findOneAndUpdate({nombreGastoComun : nombreGastoComun}, req.body, (err, gastoComunes) => {
        if(err){
            return res.status(400).send({message: "Error al obtener el gasto comun"})
        }
        if(!gastoComunes){
            return res.status(404).send({message: "Gasto comun no encontrado"})
        }
        return res.status(200).send(gastoComunes)
    })
}

const getGastoEspecifico = (req, res) =>{
    const {nombreGastoComun} = req.params; //Hacerlo por el nombre del gasto comun
    gastoComun.findOne({nombreGastoComun : nombreGastoComun}, (err, gastoComunes) =>{
        if(err){
            return res.status(400).send({messsage: "ERROR: al obtener el gasto comun"})
        }
        if(!gastoComunes){
            return res.status(404).send({message: "ERROR: gasto comun no encontrado"})
        }
        return res.status(200).send(gastoComunes)
    })
}

function pagoDeuda(String, Number){
    gastoComun.findOne({nombreGastoComun : String}, (err, gastoComunes) =>{
        if(err){
            return alert("Error");
        }
        if(!gastoComunes){
            return alert ("Error");
        }
        vecino.deuda = (vecino.deuda - Number);
        return alert("Pago exitoso");
    })
}

function buscaGasto(String){ //Por id
    gastoComun.findOne({nombreGastoComun: String}).populate('vecino').exec(function(err, gastoComun){
        if(err){
            console.log("Error");
        }
        return gastoComun.montoGastoComun;
    })
}

module.exports={
    crearGastoComun,
    getGastoComun,
    updateGastoComun,
    getGastoEspecifico,
    pagoDeuda,
    buscaGasto
}