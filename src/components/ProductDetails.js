import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductDetails = ({product}) => {

    const {price, amount, name} = product;

    return <div className='split right text-center'>
        <div className='centered'>
            <div>
                <b>{name}</b>
            </div>
            <div className='icon'>
                <FontAwesomeIcon className='fa-5x' icon={product.icon}/>
            </div>
            <div>Count: {amount}</div>
            <div>Price: {price}</div>
            <div>Total: {amount * price}$</div>
            <Link className='btn btn-secondary' to=''>Back</Link>
        </div>

    </div>
};

const mapStateToProps = (state, props) => ({
    product: state.products.filter(p => p.id == props.match.params.id)[0]
});

export default withRouter(connect(mapStateToProps)(ProductDetails));