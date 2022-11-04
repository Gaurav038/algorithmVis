import React from 'react';
import RangeSlider from "./doubleSlider";

function Guess({yesButton, noButton, upper, lower, max}) {

        const getMid = () => {
            const mid = Math.floor( (upper+lower)/2);
            return mid;
        }

        return (
            <div >

                <p>

                    <button className="btn btn-secondary btn-lg" type="button" data-toggle="collapse"
                            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Toggle Range
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <center style={{justifyContent:"center"}}>
                            <RangeSlider
                                upper={upper}
                                lower={lower}
                                max={max}
                            />
                        </center>
                    </div>
                </div>

               <h1>
                    Is you number greater than {()=>getMid()}?
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