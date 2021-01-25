import React from "react";
import preloader from './preload.svg';
import cssCls from './Preloader.module.css';

const Preloader1 = () => {
    return (
        <div className={cssCls.preloader1}>
            <img src={preloader} alt=""/>
        </div>
    );
};

export default Preloader1;