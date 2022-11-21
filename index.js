const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config();

const app = express();
const propiedadRutas = require('./Rutas/propiedadRutas');
//const vecinoRutas = require('./Rutas/vecinoRutas');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api',propiedadRutas);
//app.use('/api',vecinoRutas);


app.listen(process.env.PORT, () => {
    console.log('El servidor esta corriendo en el puerto -> ',process.env.PORT);
    });

    mongoose.set('useFindAndModify', false);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    //Linea 27: Conectarse a la BD creada por Daniel
    mongoose.connect('mongodb://PJOnate:aMZHDWVHzbJUgcv7@ac-whc0mnj-shard-00-00.7lqyqbk.mongodb.net:27017,ac-whc0mnj-shard-00-01.7lqyqbk.mongodb.net:27017,ac-whc0mnj-shard-00-02.7lqyqbk.mongodb.net:27017/?ssl=true&replicaSet=atlas-yqg0xh-shard-0&authSource=admin&retryWrites=true&w=majority',
                    (err) => {
                        if(err){
                            return console.log('Error al conectar la base de datos -> ', err)
                        }
                        return console.log('Conectado a la base de datos')
                    });


