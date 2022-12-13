import React from 'react';
import Cells from "./cells";
import Menu from "./menu";
import { useState,useEffect} from 'react';
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";

function Queen() {
    const [board, setBoard] = useState([]);
    const [number, setNumber] = useState(4);
    const [speed, setSpeed] = useState(490);
    const [isRunning, setisRunning] = useState(false);

    const handleStop =() =>{
        setisRunning(false)
    }

    const handleSpeedChange = (val)=>{
        const speed = (100-val)*10;
        setSpeed(speed);
    }
    const handleQueenChange = (number)=>{
        setNumber(number);
        const board = getBoard(number);
        setBoard(board);
    }
    const handleClear = () => {
        const board = getBoard(number);
        setBoard(board);
    }
   
    const startAlgo = async ()=>{
        setisRunning(true)
        const newBoard = board.slice();
        await queensAlgo(newBoard,0);
        const newBoard2 = turnOffAttack(board, number);
        setBoard(newBoard2);
        setisRunning(false);
    }
    const queensAlgo =  async (board,row) => {

        if( row>=number ){
            return true;
        }

        let newBoard = board.slice();
        for( let col = 0; col < number;col++ ){

            // newBoard = turnOffAttack(newBoard, number);
            const result = getChecked(newBoard,row,col, number);
            newBoard = result[0];

            setBoard(newBoard);
            await sleep(speed);
            if( result[1] ){
                const res = await queensAlgo(newBoard,row+1)
                if( res === true){
                    return true;
                }
            }
            // ---backtracking here-----------
            newBoard[row][col] = {...newBoard[row][col],isPresent:false,isCurrent:false};
            newBoard = turnOffAttack(newBoard, number);
            setBoard(newBoard);
            await sleep(speed);
        }
        return false;
    }

    useEffect(() => {
      const board = getBoard(number);
      setBoard(board);
    },[])

        return (
            <div>
                <h1 className="title" style={{color: 'black'}}> <Link to="/"><BsFillArrowLeftCircleFill /></Link> N - Queen Problem</h1>

                <Menu
                    onSpeedChange={handleSpeedChange}
                    onCountChange={handleQueenChange}
                    onViusalize={startAlgo}
                    disable={isRunning}
                    onClear={handleClear}
                    onStop={handleStop}
                />
                <div style={{textAlign:"Center"}}>
                    <Cells
                        board={board}
                    />
                </div>
            </div>
        );

}

export default Queen;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const turnOffAttack = (board,N) =>{
    const newBoard = board.slice();
    for( let i = 0;i<N; i++ ){
        for( let j = 0;j<N;j++ ){
            newBoard[i][j] = {...newBoard[i][j],isChecked:false, isAttacked:false,isCurrent:false};
        }
    }
    return newBoard;
}

const getChecked = (board,row,col,N) =>{
    const newBoard = board.slice();
    let pos = true;
  
    // same col
    for( let i = 0;i < N;i++ ){
        if( newBoard[i][col].isPresent ){
            newBoard[i][col] = {...newBoard[i][col],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][col] = {...newBoard[i][col],isChecked:true};
        }
    }

    // left side in top Diagonal
    for( let i = row,j = col; i >= 0 && j >= 0; i--, j--){
        if( newBoard[i][j].isPresent ){
            newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][j] = {...newBoard[i][j],isChecked:true};
        }
    }
  
    // right side in Top Diagonal
    for( let i = row,j = col; i>=0 && j < N; i--, j++){
        if( newBoard[i][j].isPresent ){
            newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][j] = {...newBoard[i][j],isChecked:true};
        }
    }

    newBoard[row][col] = {...newBoard[row][col],isPresent:true};

    return [newBoard,pos];
}
const getBoard = (N) =>{
    const rows = [];
    for( let i = 0;i<N;i++ ){
        const cols = [];
        for(let j =0;j<N;j++){
            cols.push(getCell(i,j));
        }
        rows.push(cols);
    }
    return rows;
}

const getCell = (row,col)=>{
    return{
        row,
        col,
        isPresent:false,
        isChecked:false,
        isAttacked:false,
        isCurrent:false
    }
}