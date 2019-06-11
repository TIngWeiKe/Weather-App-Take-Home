import cityList from './cities'

export const getSuggestions = value => {
	const inputValue = value.toLowerCase()
	const inputLength = inputValue.length

	return inputLength === 0 ? [] : cityList.filter(element => element.name.toLowerCase().slice(0, inputLength) === inputValue).slice(0, 30)
}

export const getSuggestionValue = suggestion => suggestion.name
