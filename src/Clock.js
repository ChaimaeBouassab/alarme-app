import React from "react";
import { useState } from 'react';
import './Clock.css' ;

const Clock = () => {
    let time= new Date().toLocaleTimeString();
    const[currentTime,setCurrentTime]= useState(time);
   
    const updateTime = () => {
        let time= new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime,1000)

    return (
       
        <div  className="clock">
            <h1>Time: {currentTime}</h1>
        </div>
    );
}

export default Clock;
