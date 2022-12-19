const { buscaGasto } = require('../Controladores/gastoComunControlador');
const { actualizaDeuda, buscarVecino} = require('../Controladores/vecinoControlador');
const gastoComun = require('../Modelos/gastoComun');
const vecino = require('../Modelos/vecino');

//Paga deuda total

const pagoDeudaTotal = (req, res) => {
    const {rut} = req.body;
   vecino.findOneAndUpdate({rut : rut}).populate('vecino').exec(function (err, vecino){
        if(err){
            console.log("Error");
        }
        
        vecino.deuda = 0;
        console.log(vecino.deuda);
     
        
    })
   
    console.log("Ejecutada con exito");
}

//Paga solamente un gasto

const pagarGasto = (req) => {
    const {rut, nombreGasto} = req.body;
    var deuda = buscarVecino(rut);
    var montoGasto = buscaGasto(nombreGasto);
    vecino.findOneAndUpdate({rut : rut}).populate('vecino').exec(function (err, vecino){
        if(err){
            console.log("Error");
        }
        
        vecino.deuda = (deuda-montoGasto);
        console.log(vecino.deuda);
        
        
    })
   
}

//Abona a la deuda total

const abonar = (req) => {
    const {rut, monto} = req.body;
    var deuda = buscarVecino(rut);
    vecino.findOneAndUpdate({rut : rut}).populate('vecino').exec(function (err, vecino){
        if(err){
            console.log("Error");
        }
        if(deuda > monto){
            vecino.deuda = (deuda-monto)
        }else{
            if(monto>deuda){
                vecino.deuda = (monto-deuda)
            }
            vecino.deuda = monto
        }
        
        console.log(vecino.deuda);
        
    })
   

}

module.exports={
   pagoDeudaTotal,
   pagarGasto,
   abonar
}
