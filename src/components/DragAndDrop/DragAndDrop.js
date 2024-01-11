import React from 'react'
import { useState, useEffect } from 'react';
const  DragAndDrop = (props) => {
	const [isDragging,setIsDragging] = useState(false);
	const [xTranslate,setXTranslate] = useState(0);
	const [yTranslate,setYTranslate] = useState(0);
	const [initialMousePosition, setInitialMousePosition] = useState({});

	const onMouseDown = ({ clientX, clientY }) => {
		setInitialMousePosition({ x: clientX, y : clientY})
		setIsDragging(true)
	}

	useEffect( () => {
		const onMouseMove = (event) => {


			






			setXTranslate(xTranslate + event.clientX - initialMousePosition.x)
			setYTranslate(yTranslate + event.clientY - initialMousePosition.y)
		}
		if ( isDragging){
			window.addEventListener('mousemove',onMouseMove)
		}
		return () => window.removeEventListener('mousemove',onMouseMove)
	},[isDragging,initialMousePosition])

	useEffect(() => {
		const onMouseUp = () => setIsDragging(false);
		window.addEventListener('mouseup',onMouseUp)
		return () => window.removeEventListener('mouseup', onMouseUp)
	},[])

	useEffect(() => {
		props.setNotePosition(xTranslate,yTranslate,props.id)
	},[xTranslate,yTranslate])

	useEffect(() => {
		// setXTranslate(props.xPosition)
		// setYTranslate(props.yPosition)
		// props.setNotePosition(xTranslate,yTranslate,props.id)
	},[])

	return (
		<div 
			style={{ transform: `translate(${props.xPosition}px, ${props.yPosition}px)`}} 
			onMouseDown={(e) => {onMouseDown(e)}}>
				{props.children}
		</div>
	)
}

export default DragAndDrop;