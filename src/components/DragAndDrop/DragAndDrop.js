import React from 'react'
import { useState, useEffect } from 'react';

const  DragAndDrop = (props) => {
	const [isDragging,setIsDragging] = useState(false);
	const [initialMousePosition, setInitialMousePosition] = useState({});

	const onMouseDown = ({ clientX, clientY }) => {
		setInitialMousePosition({ x: clientX, y : clientY})
		setIsDragging(true)
	}

	useEffect( () => {
		const onMouseMove = (event) => {
			if ( !props.isPinned ){
				let check = true;

				let x1 = props.xPosition + event.clientX - initialMousePosition.x;
				let y1 = props.yPosition + event.clientY - initialMousePosition.y;
				if ( x1 > 800 || y1 > 400 || x < 0 || y < 0 ) check = false;
				for ( let i = 0; i < props.notesList.length; i++ ) {
					if ( props.notesList[i].isPinned ) {
						let x2 = props.notesList[i].xPosition;
						let y2 = props.notesList[i].yPosition;
						if  (!(
								( x1 + 200 < x2 || x1 > x2 + 200 )
									||
								(y1 + 300 < y2 || y1 > y2 + 300 )
							)
							)
						{
							check = false;
						}
					}
				}

				if ( check ) {
					props.setNotePosition(x1,y1,props.id)
				}

			}
		}
		if ( isDragging){
			window.addEventListener('mousemove',onMouseMove)
		}
		return () => window.removeEventListener('mousemove',onMouseMove)
	},[isDragging,initialMousePosition])

	useEffect(() => {
		const onMouseUp = () => {
			setIsDragging(false);
		}
		window.addEventListener('mouseup',onMouseUp)
		return () => window.removeEventListener('mouseup', onMouseUp)
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