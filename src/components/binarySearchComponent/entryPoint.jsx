import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';


function EntryPoint({ startGame, upper, setUpper}){

    console.log(startGame, upper, setUpper,"----------------")
    const [error, setError] = useState(false)
    
    const getData = (e)=>{
        if( e.target.value!== "" ){
            console.log(e.target.value);
            setUpper(e.target.value);
        }
        else{
            setUpper(100)
        }
    }

        return (
            <div>
                <TextField
                    error={error}
                    id="standard-error-helper-text"
                    label="Upper Number"
                    type="number"
                    variant="outlined"
                    onChange={(e)=>getData(e)}
                /> <br /><br />
                <h1>
                    Guess a number between 0 and {upper}
                </h1>
                <br />
                <button
                    className='btn btn-warning btn-lg'
                    onClick={()=>startGame()}
                >
                    Start the game
                </button>
            </div>
        );
    
}

export default EntryPoint;