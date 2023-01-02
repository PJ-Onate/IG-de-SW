import axios from 'axios';

const createBoletas = (boletas) => {
    const response = axios.post(`${process.env.SERVIDOR}/boletas`, boletas);
    return response
}



module.exports = {
    createBoletas,
}