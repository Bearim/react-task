import React, {useEffect, use} from "react";
import {connect} from "react-redux";
import ProductEntry from "./ProductEntry";
import {onDataRequestSuccess, onDataRequestError} from "../actions";
import {getAllProducts} from "../services/productsAPI";

const ProductList = ({dispatch, products}) => {

    useEffect(() => {
        getAllProducts().then(response => {
            dispatch(onDataRequestSuccess(response.data))
        }).catch(error => {
            dispatch(onDataRequestError(error));
        });
    }, []);

    const getTotalPrice = () => {
        return products.reduce((accumulator, product) => accumulator + product.price * product.amount, 0);
    };

    return <div className='split right text-center'>
        <h4>Product list</h4>
        {products.map(p => <ProductEntry key={p.id} product={p}/>)}
        <span>Total: {getTotalPrice()}$</span>
    </div>
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);