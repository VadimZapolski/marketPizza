import React, {useEffect, useState} from 'react';
import Header from "./Component/Header";
import Home from "./Pages/Home";
import {Route} from "react-router-dom";
import CartPay from "./Pages/CartPay";
import axios from "axios";


function App() {

   const [pizzas , setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
            setPizzas(data.pizzas)
        })
    } , [])


    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={() =>  <Home pizzas={pizzas}  />}  exact />
                    <Route path="/cart" component={CartPay} exact />
                </div>
            </div>
        </div>
    );
}

export default App;
