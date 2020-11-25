import axios from 'axios';

export const getAllProducts = () => {
    return axios.get('http://demo4774019.mockable.io/reactTask/getProducts');
}