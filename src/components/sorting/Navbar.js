import React, { useState } from "react";

import Algorithms from "./navbar-components/algorithms";
import Size from "./navbar-components/size";
import Speed from "./navbar-components/speed";

// Navbar Component
export default function Navbar(props) {
  const [Algorithm, setAlgorithm] = useState([
    { value: 1, type: "Bubble Sort" },
    { value: 2, type: "Selection Sort" },
    { value: 3, type: "Insertion Sort" },
    { value: 4, type: "Merge Sort" },
    { value: 5, type: "Quick Sort" },
    { value: 6, type: "Heap Sort" },
  ]);

  const [lengths, setlengths] = useState([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  const [speeds, setspeeds] = useState([0.5, 0.75, 1.0, 2.0, 4.0]);


  return (
    <div className="navbar" id="navbar" style={{justifyContent: 'center'}}>
      <button id="random" onClick={() => props.newList(1)}>
        Random
      </button>
      <Algorithms onChange={props.onChange} algorithms={Algorithm} />
      <Size onChange={props.onChange} lengths={lengths} />
      <Speed onChange={props.onChange} speeds={speeds} />
      <button id="start" onClick={() => props.start()}>
        Start
      </button>
    </div>
  );
}
