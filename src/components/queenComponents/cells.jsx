import React from 'react';
import Cell from "./cell";
import './style.css';

function Cells(props) {
        return (
            <div className='booard m-5 queenBoard' >
                {props.board.map( (row,rowidx)=>{
                    return(
                        <div key={rowidx}>
                            {row.map( (cell,cellidx)=>{
                                return(
                                    <Cell
                                        key={cellidx}
                                        cell={cell}/>
                                );
                            } )}
                        </div>
                    );
                } )}
            </div>
        );
}

export default Cells;