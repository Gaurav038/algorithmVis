import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";

function Menu(props){

    const isClickable = () =>{
        if( this.props.isDisabled ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
        return (
            <nav className="nav alert-dark">
                <button className="btn btn-primary btn-lg m-2" onClick={props.onRefresh} disabled={props.isDisabled} style={isClickable()}>Refresh</button>
                <SimpleSelect
                    pos={0}
                    onAlgoChanged={props.setAlgo}
                />
                <DiscreteSlider
                    onChange={props.onChangeSpeed}
                    title="speed"
                    marks={false}
                    default={10}
                    step={1}
                    min={10}
                    max={50}
                    isDisabled={false}
                />
                <DiscreteSlider
                    onChange={props.onChangeValues}
                    title="Total Number"
                    marks={false}
                    default={100}
                    step={1}
                    min={10}
                    max={500}
                    isDisabled={props.isDisabled}
                />
                <button className="btn btn-warning btn-lg m-2" onClick={props.onVisualize} disabled={props.isDisabled} style={isClickable()}>Visualize</button>


            </nav>
        );

   
}

export default Menu;