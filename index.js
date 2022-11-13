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
    mongoose.connect(process.env.DB,(err) => {     
        if(err){         
            return console.log('Error al conectar la base de datos -> ',err)     
        }
            return console.log('Conectado a la base de datos') 
});

mongoose.connect(process.env.DB, (err) =>{
    if (err){
        return console.log ('Error al conectar a la base de datos -> ', err)
    }
        return console.log('Se conecto correctamente a la base de datos')
});

