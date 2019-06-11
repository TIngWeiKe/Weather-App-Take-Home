import React from 'react'
import './WeatherItem.scss'

export default function WeatherItem(props){
	return (
		<div className='item-box' key={props.id}>
			<img src={props.icon} alt='' />
			<div className='temp'>{props.temp}</div>
			<div className='city'>{props.city}</div>
			<div className='desc'>{props.description}</div>
		</div>
	)
}
