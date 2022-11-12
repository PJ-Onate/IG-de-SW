const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
        console.log ('El proyecto está corriendo en el puerto ->', process.env.PORT)
});

moongose.set('useFindandModify', false);
moongose.set('useNewUrlParser', true)
moongose.set('useCreateIndex', true)
moongose.set('useUnifiedTopology', true)

moongose.connect(process.env.DB, (err) =>{
    if (err){
        return console.log ('Error al conectar a la base de datos ->', err)
    }
})
