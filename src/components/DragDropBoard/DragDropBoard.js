import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Note from '../Note/Note.js'
import DragAndDrop from '../DragAndDrop/DragAndDrop.js'
import './DragDropBoard.css';

const DragDropBoard = () => {
  const [notesList,setNotesList] = useState([]);

  const addNote = () => {
      let newId = Math.random().toString(36).substring(7);
      let x =  [{id: newId, isPinned : false, xPosition : 0, yPosition: 0} , ...notesList]
      setNotesList(x)
  }

  const setNotePosition = (x,y,id) => {
    let notesListNew = notesList.map((note) => {
      let noteObject = {
        id: note.id,
        isPinned : note.isPinned,
        xPosition : note.xPosition,
        yPosition : note.yPosition
      }
      if ( note.id == id ) {
        noteObject.xPosition = x;
        noteObject.yPosition = y;
      }
      return noteObject
    })
    console.log("notes list")
    setNotesList(notesListNew)
    console.log(notesList)
  }

  const deleteNote = (id) => {
    let notesListNew = notesList.filter((note) => {
      if ( note.id == id ) return false;
      return true;
    })
    setNotesList(notesListNew)
    console.log("notesListdek",notesList)
  }

  return (
    <div className="board">
      {notesList.map((note) => {
        return (
          <DragAndDrop xPosition={note.xPosition} yPosition={note.yPosition} setNotePosition={setNotePosition} id={note.id}>
            <Note id={note.id} deleteNote={deleteNote}/>
          </DragAndDrop>
        )
      })}
      <div className="addButton" onClick={() => {addNote()}}><div>+</div></div>
    </div>
  )
}

export default DragDropBoard;