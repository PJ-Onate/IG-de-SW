const Boleta = require('../Modelos/boleta');
const Vecino = require('../Modelos/vecino');
const Casa = require('../Modelos/casa');

const crearBoleta = (req, res) => {
    const {tipoGastoTotal, montoGastoTotal, periodoPago} = req.body;
    const nuevaBoleta = new Boleta({
        tipoGastoTotal,
        montoGastoTotal,
        periodoPago
    });
 
    nuevaBoleta.save((err, boletas) => {
        if(err){
            res.status(400).send({
                message: "ERROR: no se puede crear boleta o ya está registrada"})
        }
    crearGastoComun;
    res.status(201).send(boletas)
});
}

const crearGastoComun = (req, res) => {
    const {montoGastoComun, vecino, boleta} = req.body;
    Casa.Find();{
        console.log(Casa.monto)
        casasTotal = 0
        for(var int in Casa){
            casasTotal = casasTotal + int.precio
        }    
    }

    Vecino.FindById();{
        Vecino.findOne({rut: String}).populate('vecino').exec(function(err,vecino){
            if(err){
                console.log("Error");
            }
            return vecino.deuda;
        })
        const nuevoGastoComun = new gastoComun({
            montoGastoComun,
            vecino,
            boleta
        })
        montoGastoComun = (Vecino.Casa.precio/casasTotal) * montoGastoTotal,
        vecino = Vecino.id,
        boleta = Boleta.id
        nuevoGastoComun.save((err, gastos) => {
        if(err){
            return res.status(400).send({
                message: "ERROR: no se puede crear GC o ya está registrado"})
        }
        return res.status(201).send(gastos)
        });
    }
}