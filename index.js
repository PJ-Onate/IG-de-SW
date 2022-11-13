const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config();

const app = express();
const estadoRutas = require('./Rutas/estadoRutas');
const vecinoRutas = require('./Rutas/vecinoRutas');

app.use(cors())
app.use(express.json);
app.options('*', cors());
app.use('/api',estadoRutas);
app.use('/api',vecinoRutas);


app.listen(process.env.PORT, () => {
    console.log('El servidor esta corriendo en el puerto -> ',process.env.PORT);
    });
    
    mongoose.set('useFindAndModify', false);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect('mongodb://Daniel:48402369@ac-azfkacu-shard-00-00.eutrwpu.mongodb.net:27017,ac-azfkacu-shard-00-01.eutrwpu.mongodb.net:27017,ac-azfkacu-shard-00-02.eutrwpu.mongodb.net:27017/?ssl=true&replicaSet=atlas-uavt7v-shard-0&authSource=admin&retryWrites=true&w=majority',
                    (err) => {
                        if(err){
                            return console.log('Error al conectar la base de datos -> ', err)
                        }
                        return console.log('Conectado a la base de datos')
                    });


