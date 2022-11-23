const estadoModelo = require('../Modelos/vecino');

const getVecinos = (req, res) => {
    Vecino.find({}, (err, vecinos) => {
        if(err){
            return res.status(400).send({message: "ERROR: no se pudieron obtener el Email del vecino"})
        }
        return res.status(200).send(vecinos)
    })
}

const nodemailer = require("nodemailer");

async function main() {
let mensajePrueba = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    user: "proyectopagovecinos@gmail.com",
    pass: "qorizrzfglpckhfr",
    },
});

/*let info = await transporter.sendMail({
    from: '"Notificacion de pagos" <proyectopagovecinos@gmail.com>',
    to: "user.usename",
    subject: "Hola, tu pago esta al dia",
    text: "Hola, este correo es para confirmar su que su pago ha sido exitoso",
});

console.log("Message sent: %s", info.messageId);

console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

module.exports={
    getVecinos
}*/

let info2 = await transporter.sendMail({
    from: '"Notificacion de pagos" <proyectopagovecinos@gmail.com>',
    to: "benjamin.barriga.r@gmail.com",
    subject: "Hola, tu pago esta pendiente",
    text: "Hola, este correo es para avisar que su pago esta pendiente, por favor realize el pago de servicios",
});

console.log("Message sent: %s", info.messageId);

console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


main().catch(console.error);

module.exports={
    getVecinos
}

let info3 = await transporter.sendMail({
    from: '"Notificacion de pagos" <proyectopagovecinos@gmail.com>',
    to: "user.usename",
    subject: "Hola, tu pago esta vencido",
    text: "Hola, este correo es para avisar que su pago se encuentra vencido, por favor realize su pago de servicios",
});

console.log("Message sent: %s", info.messageId);

console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


main().catch(console.error);

module.exports={
    getVecinos
}

/*Obtiene los estado y email de cada uno de los vecinos

Si el estado de el vecino es Pagado No envia nada

Si el estado de el vecino cambia a pendiente == enviar correo de pendiente

Si el estado no cambia a pagado nuevamente al dia siguiente == enviar correo de pago vencido

*/
}
