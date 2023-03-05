import React from 'react';
import PageImg from "../../assets/images/404.png";
const NotFound = () => {
    return (
        <div className="center-screen">
            <img className="animated fadeIn" src={PageImg} alt='not found'/>
        </div>
    );
};
export default NotFound;