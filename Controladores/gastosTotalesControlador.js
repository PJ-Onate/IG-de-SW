const gastosTotales = require('../Modelos/gastosTotales');

const crearGastoTotal = (req, res) => {
    const {tipoGastoTotal, montoGastoTotal, fechaGastoTotal} = req.body;
    const nuevoGastoTotal = new gastosTotales({
        tipoGastoTotal,
        montoGastoTotal,
        fechaGastoTotal
    });
 
nuevoGastoTotal.save((err, gastosTotales) => {
    if(err){
        return res.status(400).send({
            message: "ERROR: no se puede crear gasto total o ya está registrado"})
    }
    return res.status(201).send(gastosTotales)
});
}

module.exports={
    crearGastoTotal
}