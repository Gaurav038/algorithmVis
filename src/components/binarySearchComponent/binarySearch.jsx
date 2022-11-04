import React, {Component} from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import { useState } from 'react';

function BinarySearch (){

    const [upper, setUpper] = useState(100);
    const [lower, setLower] = useState(0);
    const [max, setMax] = useState(100);
    const [ isRunning, setRunning] = useState(false);
   
    const handleStartGame = () => {
        setRunning(true);
    }
    const handleRestart = () =>{
        setRunning(false);
        setUpper(100)
        setLower(0)
    }
    const handleYes = () =>{
        const mid = Math.floor( (upper+lower)/2);
         setLower(mid+1);
    }
    const handleNo = () =>{
        const mid = Math.floor( (upper+lower)/2);
         setUpper(mid);
    }
    const handleSetUpper = (up) =>{
        let val = parseInt(up);
        if( val<=0 ){
            val = 100;
        }
        setUpper(val);
        setMax(val);
    }

        return (
            <div>
                <br />
                <br />
                <br />
            <center>
                {!isRunning &&
                <EntryPoint
                    startGame={handleStartGame}
                    upper={upper}
                    setUpper={handleSetUpper}
                /> }
                {isRunning &&
                <Search
                    yesButton={handleYes}
                    noButton={handleNo}
                    upper={upper}
                    lower={lower}
                    max={max}
                    onRestart={handleRestart}
                />
                }
            </center>
            </div>
        );
}

export default BinarySearch;