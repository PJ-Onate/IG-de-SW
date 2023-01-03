import axios from 'axios';

const createBoletas = (boletas) => {
    const response = axios.post(`${process.env.SERVIDOR}/boletas`, boletas);
    return response
}

const getBoletas = (boletas) =>{
    const response = axios.get(`${process.env.SERVIDOR}/boleta`);
    return response
}

const updateBoletas = (boletas) =>{
    const response = axios.put(`${process.env.SERVIDOR}/boleta/${id}`, boletas);
    return response
}



const getGastosComunes = (gastos) =>{
    const response = axios.get(`${process.env.SERVIDOR}/gastoComunes`);
    return response
}


module.exports = {
    createBoletas,
    getBoletas,
    updateBoletas,
    getGastosComunes,
}