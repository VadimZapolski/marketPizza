import React from 'react';
import Header from "./Component/Header";
import Home from "./Pages/Home";
import {Route} from "react-router-dom";
import CartPay from "./Pages/CartPay";


function App() {


    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/"     component={Home} exact/>
                    <Route path="/cart" component={CartPay} exact/>
                </div>
            </div>
        </div>
    );
}

export default App
