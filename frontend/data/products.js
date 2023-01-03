import axios from 'axios';

const getProducts = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/vecinos`);
    return response
}

const ingresarVecino = (vecinos) => {
    const response = axios.post(`${process.env.SERVIDOR}/vecino`, vecinos);
    return response
}


module.exports = {
    getProducts,
    ingresarVecino
}