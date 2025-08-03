import React from "react";
import "../../styles/index.css";

const Counter = (props) => {
    const seconds = props.seconds || 0;

    return (
        <div className="counter-container">
            <p>{Math.floor(seconds / 60000) % 10}</p>
            <p>{Math.floor(seconds / 6000) % 10}</p>
            <p>{Math.floor(seconds / 600) % 10}</p>
            <p>{Math.floor(seconds / 60) % 10}</p>
            <p>{Math.floor(seconds) % 10}</p>
        </div>
    );
};


export default Counter