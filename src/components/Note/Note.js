import React from 'react'
import { useState, useEffect } from 'react'
import './Note.css';

const Note = ({id , deleteNote}) => {

  const [content,setContent] = useState("")

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const editNote = () => {
    
  }

  return (
    <div className="box">
      <div className="deleteButton" onClick={() => {deleteNote(id)}}><div>x</div></div>
      <div className="inputBox">
        <textarea type="text" value={id} onChange = {(e) => {handleChange(e)}} />
      </div>
      <div className="editButton" onClick={() => {editNote(id)}}><div>EDIT</div></div>
    </div>
  )
}

export default Note;
