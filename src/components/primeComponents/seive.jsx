import React from 'react';
import Cells from "./cells";
import DiscreteSlider from "./slider";
import Menu from "./menu";
import {seive} from "../algorithms/prime";
import Spiral from "./spiral";
import { useState } from 'react';
import { useEffect } from 'react';

const getNewCellPrimeToggled = (cells,pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isPrime:true
    }
    newCells[pos] = newCell;
    return newCells;
}

const getNewCellVisitingToggled = (cells,pos)=>{
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isVisiting:!cell.isVisiting
    }
    newCells[pos] = newCell;
    return newCells;
}

const getNewCellCheckToggled = (cells,pos) =>{
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isChecking:true
    }
    newCells[pos] = newCell;
    return newCells;
}

const getCells = (rows)=>{
    const cells = [];
    for(let cell = 1;cell<=rows;cell++){
        cells.push(createCell(cell))
    }
    return cells;
}
const createCell = (val)=>{
    return {
        val,
        isChecking:false,
        isVisiting:false,
        isPrime:false
    };
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Seive() {
    const [number, setNumber] = useState(100)
    const [cells, setCells] = useState([])
    const [isRunning, setisRunning] = useState(false)
    const [speed, setSpeed] = useState(500)
    const [primes, setPrimes] = useState([])
    const [maxPrime, setmaxPrime] = useState(0)
    const [algo, setalgos] = useState(0)
   
    

    const setAlgo = (pos, val) => {
        if (pos === 0) {
            setalgos(val)
        }
    }

    const changeSpeed = (speed) => {
        //console.log(typeof speed);
         setSpeed(600-speed*10);
    }
    const handleValueIncease = (value) => {
        setNumber(value);
        if(algo === 0 ){
            setCells(getCells(value));
            setisRunning(false)
        }
        // console.log(value);
    }
    const handleRefresh = () => {
        setCells(getCells(number));
        setisRunning(false)
    }

    const startAlgo = () =>{
        // console.log(this.state.algo);
        if( algo === 0 ){
            startSeive();
        }else if( algo === 1 ){
           startSpiral();
        }
    }
    const startSpiral = async () =>{
        let pprimes = seive(number*100);
        let primes = [];
        setPrimes([]);
        setmaxPrime(pprimes[pprimes.length-1])
        let mod = Math.ceil(number/10);
        for(let i=0;i<pprimes.length;i++){
            primes.push(pprimes[i]);

            if( i%mod === 0 ){
                setPrimes(primes);
                await sleep(10);
            }
        }
        console.log('done');
    }
    const startSeive = async () => {
        setisRunning(true)
        const prime = [];
        for(let i = 0;i<=number;i++){
            prime.push(1);
        }
        prime[0] = prime[1] = 0;
        let changedCells = cells;
        let prevCheck = -1;
        let counter = 0;
        for( let i = 2; i<=number;i++){
            if( prime[i] === 1 ){
             //   setTimeout(()=>{
                    changedCells = getNewCellPrimeToggled(changedCells,i-1);
                    setCells(changedCells)
                //},counter*speed);
                await sleep(speed);
                counter++;
                for(let j = i*i;j<=number;j+=i){
                    //setTimeout(()=>{
                        if( prevCheck!=-1 ){
                            changedCells = getNewCellVisitingToggled(changedCells,prevCheck);
                        }
                        prevCheck = j-1;
                        changedCells = getNewCellCheckToggled(changedCells,j-1);
                        changedCells = getNewCellVisitingToggled(changedCells,prevCheck);
                        setCells(changedCells)
                  //  },counter*speed);
                    await sleep(speed);
                    counter++;
                    prime[j] = 0;
                }
            }
        }
      //  setTimeout(()=>{
        changedCells = getNewCellVisitingToggled(changedCells,prevCheck);
        setCells(changedCells)
        setisRunning(false)
       // },counter*speed);
    }
        useEffect(() => {
            const cells = getCells(this.state.number);
            this.setState({cells});
        })

        return (
            <div>
                <Menu
                    onChangeSpeed={changeSpeed}
                    onChangeValues={handleValueIncease}
                    onVisualize = {startAlgo}
                    onRefresh = {handleRefresh}
                    isDisabled = {isRunning}
                    setAlgo={setAlgo}
                />
                {algo === 0 &&
                    <Cells
                        num={number}
                        cells={cells}
                    />
                }
                {algo === 1 &&
                    <Spiral
                        num={number}
                        primes={primes}
                        maxPrime={maxPrime}
                    />
                }

            </div>
        );
}


export default Seive;