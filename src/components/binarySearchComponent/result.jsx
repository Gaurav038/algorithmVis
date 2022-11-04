import React from 'react';

function Result({res, onRestart}) {
        return (
            <div>
                <span className='display-3'>
                    Your number is {res}
                </span> <br />
                <button
                    className='btn btn-warning btn-lg'
                    onClick={onRestart}
                >
                    Restart
                </button>
            </div>
        );
    }

export default Result;