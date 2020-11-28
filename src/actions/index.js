import {ProductActions} from "../common/ProductActions";
import {getAllProducts} from "../services/productsAPI";

export const addProductAction = product => ({
    type: ProductActions.ADD_PRODUCT,
    ...product
});

export const getProductsAction = () => {
    return (dispatch) => {
        getAllProducts()
            .then(response => {
                dispatch(onDataRequestSuccessAction(response.data))
            })
            .catch(error => {
                dispatch(onDataRequestErrorAction)
            })

    }
}

export const editProductsAmountAction = ({id, amount}) => ({
    type: ProductActions.EDIT_PRODUCTS_AMOUNT,
    id: id,
    amount: amount
});

export const removeProductAction = id => ({
    type: ProductActions.RECEIVED_DATA,
    id: id
});


export const onDataRequestSuccessAction = data => ({
    type: ProductActions.RECEIVED_DATA,
    data: data
});

export const onDataRequestErrorAction = error => ({
    type: ProductActions.DATA_REQUEST_ERROR,
    error: error
});
