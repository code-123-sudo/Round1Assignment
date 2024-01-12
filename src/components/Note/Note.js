import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './Note.css';

const Note = ({id , deleteNote, pinUnpinNote, pin, setNoteContent, content}) => {

  const inputElement = useRef();

  const handleChange = (e,id) => {
    setNoteContent(id,e.target.value);
  }

  const editNote = () => {
    inputElement.current.setSelectionRange(0, 0);
    inputElement.current.focus();
  }

  return (
    <div className="box">
      <div className="deleteButton" onClick={() => {deleteNote(id)}}><div>x</div></div>
      <div className="pinButton" onClick={() => {pinUnpinNote(id)}}><div>{ pin ? "UNPIN" : "PIN"}</div></div>
      <div className="inputBox">
        <textarea type="text" ref={inputElement} value={content} onChange = {(e) => {handleChange(e,id)}} />
      </div>
      <div className="editButton" onClick={() => {editNote(id)}}><div>EDIT</div></div>
    </div>
  )
}

export default Note;
