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
			if ( !props.isPinned ){
				let check = true;

				let x1 = xTranslate + event.clientX - initialMousePosition.x;
				let y1 = yTranslate + event.clientY - initialMousePosition.y;

				for ( let i = 0; i < props.notesList.length; i++ ) {
					if ( props.notesList[i].isPinned ) {
						let x2 = props.notesList[i].xPosition;
						let y2 = props.notesList[i].yPosition;
						if (
								( x1 + 200 < x2 || x1 > x2 + 200 )
									||
								(y1 + 300 < y2 || y1 > y2 + 300 )
							)
						{
							check = true;
						}else {
							check = false;
						}
						
					}
				}

				if ( check ) {
					setXTranslate(xTranslate + event.clientX - initialMousePosition.x)
					setYTranslate(yTranslate + event.clientY - initialMousePosition.y)
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

	useEffect(() => {
		props.setNotePosition(xTranslate,yTranslate,props.id)
	},[xTranslate,yTranslate])

	useEffect(() => {
		props.setNotePosition(xTranslate,yTranslate,props.id)
	},[xTranslate,yTranslate])

	return (
		<div 
			style={{ transform: `translate(${props.xPosition}px, ${props.yPosition}px)`}} 
			onMouseDown={(e) => {onMouseDown(e)}}>
				{props.children}
		</div>
	)
}

export default DragAndDrop;