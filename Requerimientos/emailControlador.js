const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
//const model = require("../Modelos/vecino");

const api = express();

/*exports.getData = (req, res) => {
    model.find({email}, (err, docs) => {
        res.send({
            docs
        })
    })

}*/

const email =  (req, res) => {

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'proyectopagovecinos@gmail.com',
            pass: 'qorizrzfglpckhfr'
        }
});

var opcionesEmail = {
    from: '"Mensaje pa probar"', // sender address
    to: "benjamin.barriga.r@gmail.com", // list of receivers
    subject: "Mensaje de prueba aaaaaaaa", // Subject line
    text: "mensaje pa probar 2", // plain text body
};

transporter.sendMail(opcionesEmail, (error, info) => {
    if (error) {
        res.status(500).send(error.message);
    }else {
        console.log("Email enviado");
        res.status(200).jsonp(req.body);
    }
});
};

cron.schedule("0 8 27 * *", () => {

    const http = require("http");

    const options = {
    "method": "POST",
    "hostname": "localhost",
    "port": "3001",
    "path": "/api/sent-email",
    "headers": {
        "Content-Length": "0"
    }
    };

    const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
    });

    req.end();

});
module.exports={email}
