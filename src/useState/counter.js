import React, { useState } from "react";
import logo from "../logo.svg";
import "./counter.css";

export default function Counter() {
    // state untuk input text
    const [inputValue, setInputValue] = useState('')

    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    const hideImage = () => {
        setShowImage(!showImage);
    };

    // digunakan ketika user mengubah nilai pada input
    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <div className="Main">
            <p className="Text">Counter with useState</p>
            <p>KELOMPOK XX</p>
            <input type='text' onChange={inputHandler}/>
            <p>{ inputValue }</p>
            <div className="ViewImage">
                <div className="ViewImage1">
                    <img className="App-logo"
                        style={{
                            display: showImage === true ? "flex" :
                                "none"
                        }}
                        src={logo}
                        alt="logo" />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "show" : "hide"}
                </button>
            </div>
            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>
        </div>
    );
}