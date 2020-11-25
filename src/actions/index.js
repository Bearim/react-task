export const addProductAction = product => ({
    type: 'ADD_PRODUCT',
    ...product
});

export const editProductsAmountAction = ({id, amount}) => ({
    type: 'EDIT_PRODUCTS_AMOUNT',
    id: id,
    amount: amount
});

export const removeProductAction = id => ({
    type: 'REMOVE_PRODUCT',
    id: id
});


export const onDataRequestSuccessAction = data => ({
    type: 'RECEIVED_DATA',
    data: data
});

export const onDataRequestErrorAction = error => ({
    type: 'DATA_REQUEST_ERROR',
    error: error
});
