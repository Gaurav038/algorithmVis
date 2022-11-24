import React, {Component} from 'react';
import './style.css'
import queen from './queen.png';

function Cell(props) {

    const getClassName = ()=>{
        if(props.cell.isAttacked){
            return "boardCell attacked";
        } else if(props.cell.isCurrent){
            return "boardCell current";
        }else if(props.cell.isPresent){
            return "boardCell present";
        }else if(props.cell.isChecked){
            return "boardCell checked";
        } else{
            return "boardCell";
        }
    }
    const getStyled = () =>{
        if( (props.cell.row+props.cell.col)%2 === 0 ){
            return {
                backgroundColor:"white"
            }
        }else{
            return {
                backgroundColor:"grey"
            }
        }
    }
        return (
            <div className={getClassName()} style={getStyled()}>
                { props.cell.isPresent && <img src={queen} height='100px' style={{padding:"25px"}}/> }
            </div>
        );
   
}

export default Cell;