import React from "react";
import './Loader.css';

const Loader = ({text}) => {
    return (
        <div className="loader-container">
            <div className="loader"></div>
            <p>{text}</p>
        </div>
    )
}

export default Loader;