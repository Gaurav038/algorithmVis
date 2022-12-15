import React from 'react';
import DiscreteSlider from "./slider";



function Menu (props){

    const isClickable = () =>{
        if(props.disable ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
        return (
            <nav className="nav alert-dark flex-nowrap justify-content-center">
                <button
                    className='btn btn-secondary m-2'
                    onClick={props.onClear}
                    disabled={props.disable}
                    style={isClickable()}
                >
                    Clear Board
                </button>

                <DiscreteSlider
                    default={4}
                    min={1}
                    max={8}
                    step={1}
                    title="Grid size"
                    onCountChange={props.onCountChange}
                    disable={props.disable}
                />
                <DiscreteSlider
                    default={50}
                    min={1}
                    max={100}
                    step={1}
                    title="Speed"
                    onCountChange={props.onSpeedChange}
                    disable={props.disable}
                />

                <button
                    className='btn btn-warning btn-lg '
                    onClick={props.onViusalize}
                    disabled={props.disable}
                    style={isClickable()}
                >
                    Visualize
                </button>

            </nav>
        );
   
}


export default Menu;