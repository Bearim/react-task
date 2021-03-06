import React, {useEffect, use} from "react";
import {connect} from "react-redux";
import ProductEntry from "./ProductEntry";
import {getProductsAction} from "../actions";

const ProductList = ({dispatch, products}) => {

    useEffect(()=>{
        !products.length && dispatch(getProductsAction());
    }, [])

    const getTotalPrice = products.reduce((accumulator, product) => accumulator + product.price * product.amount, 0);

    return <div className='split right text-center'>
        <h4>Product list</h4>
        {products.map(p => <ProductEntry key={p.id} product={p}/>)}
        <span>Total: {getTotalPrice}$</span>
    </div>
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);