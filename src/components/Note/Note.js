import React from 'react'
import { useState, useEffect } from 'react'
import './Note.css';

const Note = ({id , deleteNote, pinUnpinNote, pin}) => {

  const [content,setContent] = useState("")

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const editNote = () => {

  }

  return (
    <div className="box">
      <div className="deleteButton" onClick={() => {deleteNote(id)}}><div>x</div></div>
      <div className="pinButton" onClick={() => {pinUnpinNote(id)}}><div>{ pin ? "UNPIN" : "PIN"}</div></div>
      <div className="inputBox">
        <textarea type="text" value={content} onChange = {(e) => {handleChange(e)}} />
      </div>
      <div className="editButton" onClick={() => {editNote(id)}}><div>EDIT</div></div>
    </div>
  )
}

export default Note;
