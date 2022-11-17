import React, {Component} from 'react';
import Cells from "./cells";
import Navbar from "./navbar";
import Menu from "./menu";
import { useState,useEffect} from 'react';

function Queen() {
    const {board, setBoard} = useState([]);
    const {number, setNumber} = useState(4);
    const {speed, setSpeed} = useState(490);
    const {isRunning, setisRunning} = useState(false);

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
    const handleTurnOff =  () => {
        const newBoard = turnOffAttack(board, number);
        this.setState({board:newBoard});
    }
    const startAlgo = async ()=>{
        this.setState({isRunning:true});
        const newBoard = this.state.board.slice();
        await this.queensAlgo(newBoard,0);
        const newBoard2 = turnOffAttack(this.state.board,this.state.number);
        this.setState({board:newBoard2,isRunning:false});
    }
    const queensAlgo =  async (board,col) => {

        if( col>=this.state.number ){
            return true;
        }

        let newBoard = board.slice();
        for( let i = 0; i < this.state.number;i++ ){


            newBoard = turnOffAttack(newBoard,this.state.number);
            const result = getChecked(newBoard,i,col,this.state.number);
            newBoard = result[0];

            this.setState({board:newBoard});
            await sleep(this.state.speed);
            if( result[1] ){
                const res = await this.queensAlgo(newBoard,col+1)
                if( res === true){
                    return true;
                }
                newBoard[i][col] = {...newBoard[i][col],isPresent:true,isCurrent:true};
                this.setState({board:newBoard});
                await sleep(this.state.speed);
                newBoard[i][col] = {...newBoard[i][col],isPresent:false,isCurrent:false};
                this.setState({board:newBoard});

            }
            newBoard[i][col] = {...newBoard[i][col],isPresent:false,isCurrent:false};
            newBoard = turnOffAttack(newBoard,this.state.number);
            this.setState({board:newBoard});
            await sleep(this.state.speed);
        }
        return false;
    }

    useEffect(() => {
      const board = getBoard(number);
      setBoard(board);
    })


        return (
            <div>
                <Navbar/>
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
        if( newBoard[row][i].isPresent ){
            newBoard[row][i] = {...newBoard[row][i],isAttacked:true};
            pos = false;
        } else{
            newBoard[row][i] = {...newBoard[row][i],isChecked:true};
        }
    }
    // same row
    for( let i = 0;i < N;i++ ){
        if( newBoard[i][col].isPresent ){
            newBoard[i][col] = {...newBoard[i][col],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][col] = {...newBoard[i][col],isChecked:true};
        }
    }
    for( let i = row,j = col; i >= 0 && j >= 0; i--, j--){
        if( newBoard[i][j].isPresent ){
            newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][j] = {...newBoard[i][j],isChecked:true};
        }
    }
    for( let i = row,j = col; i <N && j >= 0; i++, j--){
        if( newBoard[i][j].isPresent ){
            newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][j] = {...newBoard[i][j],isChecked:true};
        }
    }
    for( let i = row,j = col; i <N && j < N; i++, j++){
        if( newBoard[i][j].isPresent ){
            newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][j] = {...newBoard[i][j],isChecked:true};
        }
    }
    for( let i = row,j = col; i>=0 && j < N; i--, j++){
        if( newBoard[i][j].isPresent ){
            newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
            pos = false;
        } else{
            newBoard[i][j] = {...newBoard[i][j],isChecked:true};
        }
    }

    newBoard[row][col] = {...newBoard[row][col],isPresent:true,isCurrent:true};

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