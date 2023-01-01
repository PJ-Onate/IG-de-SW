import axios from 'axios';

const getProducts = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/vecinos`);
    return response
}



module.exports = {
    getProducts,
}