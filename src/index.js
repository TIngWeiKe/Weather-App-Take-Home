import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import WeatherList from './containers/WeatherList'
import './style/global.scss'

ReactDOM.render(
	<Provider store={store}>
		<div className='App'>
			<WeatherList />
		</div>
	</Provider>,
	document.getElementById('root')
)
