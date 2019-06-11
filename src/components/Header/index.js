import React from 'react'
import './Header.scss'

export default function Header(props){
	return (
		<div className='header'>
			<h1>{props.content}</h1>
		</div>
	)
}
