import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherData } from '../../redux/weather.redux'
import Header from '../../components/Header'
import Search from '../Search'
import WeatherItem from '../../components/WeatherItem'
import { fToC } from '../../utils/weatherConfig'
import { CSSTransitionGroup } from 'react-transition-group'
import './WeatherList.scss'

class WeatherList extends Component {
	render() {
		console.log(this.props)
		const weather = this.props.weather
		const weatherData = weather.data.map(data => {
			return (
			<WeatherItem 
				key={data.id} 
				city={data.name} 
				temp={fToC(data.main.temp)} 
				description={data.weather[0].description} 
				icon={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />)
		})
		return (
			<div className={'weather-box'}>
				<Header content={weather.message} />
				<Search />
				<CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {weatherData}
        </CSSTransitionGroup>
			</div>
		)
	}
}

const mapStateToProps = state => state
const actionCreators = { getWeatherData }
export default connect(mapStateToProps, actionCreators)(WeatherList)
