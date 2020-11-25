import React, {useState} from 'react';
import {Button} from "reactstrap";
import {IconSelect} from "./IconSelect";
import {connect} from "react-redux";
import {addProductAction} from "../actions";
import {Icons as icons} from "../common/Icons";

const AddProduct = ({dispatch}) => {

    const empty = {
        name: '',
        price: '',
        amount: 1,
        icon: icons[0].icon
    };

    const [product, setProduct] = useState(empty);

    const handleChange = event => setProduct({
        ...product,
        [event.target.name]: event.target.value
    });

    const handleIconChange = icon => setProduct({
        ...product,
        icon: icon
    });

    const handleAmountChange = amount => setProduct({
        ...product,
        amount: amount
    });

    const addProduct = () => {
        dispatch(addProductAction(product));
        setProduct(empty);
    };

    return <div className='split left text-center'>
            <div>
                <h4>Add product to your cart list</h4>

                <input className='input text-white' type='text' name='name' placeholder='Product name'
                       onChange={handleChange} value={product.name}/>
                <input className='input text-white' type='number' name='price' placeholder='Product price' min='1'
                       onChange={handleChange} value={product.price}/>
                <div>
                    <Button onClick={() => handleAmountChange(product.amount - 1)}
                            disabled={!(product.amount - 1)}>-</Button>
                    <span>{product.amount}</span>
                    <Button onClick={() => handleAmountChange(product.amount + 1)}>+</Button>
                </div>

                <IconSelect default={product.icon} onChange={handleIconChange}/>

                <Button onClick={addProduct}>Add to list</Button>
            </div>
        </div>

};

export default connect()(AddProduct);