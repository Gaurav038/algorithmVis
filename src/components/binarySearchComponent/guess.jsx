import React from 'react';

function Guess({yesButton, noButton, upper, lower, max}) {

        const getMid = () => {
            const mid = Math.floor( (upper+lower)/2);
            return mid;
        }

        return(
            <div>

                <p>
                </p>

               <h1>
                    Is you number greater than {getMid()}?
                </h1> <br />
                <button
                    className='btn btn-lg btn-success m-2'
                    onClick={yesButton}
                >Yes</button>
                <button
                    className='btn btn-lg btn-danger m-2'
                    onClick={noButton}
                >No</button> <br/>
            </div>
        );
    
}

export default Guess;