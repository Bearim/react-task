import React from 'react';
import './App.css';
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import {connect} from "react-redux";

function App() {
    return (
            <div className='wrapper'>
                <AddProduct/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <ProductList/>
                        </Route>
                        <Route exact path='/:id'>
                            <ProductDetails/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
    );
}

export default connect()(App);
