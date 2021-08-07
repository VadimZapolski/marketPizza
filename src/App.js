import React, {useEffect} from 'react';
import Header from "./Component/Header";
import Home from "./Pages/Home";
import {Route} from "react-router-dom";
import CartPay from "./Pages/CartPay";
import axios from "axios";
import {useDispatch} from "react-redux";
import setPizzas from "./Redux/actions/actionsPizzas";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
            axios.get('http://localhost:3001/pizzas').then(({data}) => {
                    dispatch(setPizzas(data))
                })
        }, [])

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
