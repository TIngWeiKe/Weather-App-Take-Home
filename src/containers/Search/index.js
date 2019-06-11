import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherData } from '../../redux/weather.redux'
import Autosuggest from 'react-autosuggest'
import { getSuggestions, getSuggestionValue } from '../../utils/autoComplete'
import './Search.scss'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			suggestions: []
		}
	}

	SuggestionList = suggestion => <div>{suggestion.name}</div>

	handleChange = e => this.setState({ value: e.target.value })

	onChange = (e, { newValue }) => this.setState({ value: newValue })

	onSuggestionsFetchRequested = ({ value }) => this.setState({ suggestions: getSuggestions(value) })

	onSuggestionsClearRequested = () => this.setState({ suggestions: [] })

	handleKeyDown = e => {
		if (e.keyCode === 13 && this.state.value) {
			this.props.getWeatherData(this.state.value)
			this.setState({ value: '' })
		}
	}

	render() {
		const { value, suggestions } = this.state
		const inputProps = {
			placeholder: 'Type Your City...',
			className: 'input',
			value,
			onChange: this.onChange,
			onKeyDown: this.handleKeyDown
		}

		return (
			<div>
				<Autosuggest 
					onKeyDown={this.handleKeyDown} 
					suggestions={suggestions} 
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} 
					onSuggestionsClearRequested={this.onSuggestionsClearRequested} 
					getSuggestionValue={getSuggestionValue} 
					renderSuggestion={this.SuggestionList} 
					inputProps={inputProps} />
			</div>
		)
	}
}

const mapStateToProps = state => state
const actionCreators = { getWeatherData }

export default connect(mapStateToProps, actionCreators)(Search)
