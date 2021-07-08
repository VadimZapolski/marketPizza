import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";


function App() {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <Button text='кнопка'/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
