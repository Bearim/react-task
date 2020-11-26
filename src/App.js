import React, {Suspense, lazy} from 'react';
import './App.css';
import AddProduct from "./components/AddProduct";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

const ProductDetails = lazy(() => import('./components/ProductDetails'));
const ProductList = lazy(() => import('./components/ProductList'));

function App() {
    return (
            <div className='wrapper'>
                <AddProduct/>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path='/'>
                                <ProductList/>
                            </Route>
                            <Route exact path='/:id'>
                                <ProductDetails/>
                            </Route>
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </div>
    );
}

export default connect()(App);
