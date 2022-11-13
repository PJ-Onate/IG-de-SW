const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config();

const app = express();
const estadoRutas = require('./Rutas/estadoRutas');

app.use(cors())
app.use(express.json);
app.options('*', estadoRutas);

app.listen(process.env.PORT, () => {
        console.log ('El proyecto está corriendo en el puerto ->', process.env.PORT)
});

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect(process.env.DB, (err) =>{
    if (err){
        return console.log ('Error al conectar a la base de datos ->', err)
    }
    return console.log('Se conecto correctamente a la base de datos');
})