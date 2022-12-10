import React, {Component} from 'react';
import Cell from "./cell";
import './cells.css'

function Cells(props){

        return (
            <div className="Cells">
                {props.cells.map( (cell,indx)=>{
                    return (
                        <Cell
                            key={indx}
                            cell={cell}
                        />
                    );
                } )}
            </div>
        );

}

export default Cells;