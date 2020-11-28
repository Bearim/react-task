import {combineReducers} from "redux";
import uuid from "react-uuid";
import {Icons as icons} from "../common/Icons";
import {ProductActions} from "../common/ProductActions";

const products = (state = [], action) => {
    switch (action.type) {
        case ProductActions.ADD_PRODUCT:
            return [
                ...state,
                {
                    id: uuid(),
                    name: action.name,
                    price: action.price,
                    amount: action.amount,
                    icon: action.icon
                }
            ];

        case ProductActions.REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.id);

        case ProductActions.EDIT_PRODUCTS_AMOUNT:
            return state.map(p => p.id === action.id ? {...p, amount: action.amount} : p)

        case ProductActions.RECEIVED_DATA:
            return action.data.map(p => ({...p, id: uuid(), icon: icons[p.icon].icon}));

        case ProductActions.DATA_REQUEST_ERROR: {
            return state;
        }

        default:
            return state;
    }
};

export default combineReducers({products});