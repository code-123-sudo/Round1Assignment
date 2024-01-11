import React, { useState , useEffect , useRef } from 'react';
import DragDropBoard from './components/DragDropBoard/DragDropBoard.js'

function App(props) {   
  return (
    <div>
      <div className="topDiv">
        <DragDropBoard />
      </div>
    </div>
  );
}

export default App;

