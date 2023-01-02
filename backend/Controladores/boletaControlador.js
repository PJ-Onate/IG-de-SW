const Boleta = require('../Modelos/boleta');
const Vecino = require('../Modelos/vecino');
const gastoComun = require('../Modelos/gastoComun');

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
    console.log(nuevaBoleta.tipoBoleta)
    Gasto_por_vecino(req, res, nuevaBoleta.tipoBoleta, nuevaBoleta.montoBoleta);
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
        //console.log(boletas)
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

function Gasto_por_vecino(req, res, tipo, monto){
    Vecino.find({}, (err, vecinos)=>{
      //console.log(vecinos[2].rut)
        var suma = 0
        for (var n in vecinos){
            suma = suma + 1
        }
      for (var n in vecinos){
        //console.log(vecinos[n].rut);

        const {nombreGastoComun, montoGastoComun, vecino} = req.body;
        const nuevoGastoComun = new gastoComun({
            nombreGastoComun: tipo,
            montoGastoComun: monto/suma,
            vecino: vecinos[n].id
        })
        console.log(nuevoGastoComun);
        nuevoGastoComun.save();
      }
    })
}



const login = (req, res) =>{
    return res.status(200).send({ message: "Se ha logrado" })
}

module.exports={
    crearBoleta,
    updateBoleta,
    getBoletas,
    getBoletaEspecifica,
    deleteBoleta,
    login
}
