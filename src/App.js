import React, { useState , useEffect , useRef } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

