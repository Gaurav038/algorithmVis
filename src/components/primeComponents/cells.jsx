import React, {Component} from 'react';
import Cell from "./cell";
import './cells.css'

function Cells(props){

        return (
            <div className="Cells">
                {props.cells.map( (cell,cellidx)=>{
                    return (
                        <Cell
                            key={cellidx}
                            cell={cell}
                        />
                    );
                } )}
            </div>
        );

}

export default Cells;