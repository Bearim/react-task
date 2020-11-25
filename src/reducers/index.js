import {combineReducers} from "redux";
import uuid from "react-uuid";
import {Icons as icons} from "../components/common/Icons";

const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
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

        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.id);

        case 'EDIT_PRODUCTS_AMOUNT':
            return state.map(p => {
                if (p.id === action.id) {
                    return {
                        ...p,
                        amount: action.amount
                    }
                }
                return p;
            });

        case 'RECEIVED_DATA':
            return action.data.map(p => ({...p, id: uuid(), icon: icons[p.icon].icon}));

        case "DATA_REQUEST_ERROR": {
            console.log(action.error);
            return state;
        }

        default:
            return state
    }
};

export default combineReducers({products});