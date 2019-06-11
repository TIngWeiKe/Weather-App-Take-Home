import axios from 'axios'
import { isCityExist, deleteDuplicate } from '../utils/weatherConfig'
const initState = { data: [], message: 'Weather' }

const GET_WEATHER_DATA_SUCCESS = 'GET_WEATHER_DATA_SUCCESS'
const GET_WEATHER_DATA_ERROR = 'GET_WEATHER_DATA_ERROR'

//Reducer
export const weather = (state = initState, action) => {
	switch (action.type) {
		case GET_WEATHER_DATA_SUCCESS:
			const dataArr = state.data
			const currentID = action.payload.id
			if (isCityExist(dataArr, currentID)) {
				const arr = deleteDuplicate(dataArr, currentID)
				arr.unshift(action.payload)
				return (state = { ...state, data: arr })
			}
			state.data.push(action.payload)
			return (state = { ...state })
		case GET_WEATHER_DATA_ERROR:
			return (state = { ...state, message: `Can not find City name '${action.payload}'`})
		default:
			return state
	}
}

export const getWeatherData = cityName => async dispatch => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd45fc9db8849cb46d00a451483ccd44`
	try {
		const res = await axios.get(url)
		if (res.status === 200) dispatch({ type: GET_WEATHER_DATA_SUCCESS, payload: res.data })
	} catch (error) {
		dispatch({ type: GET_WEATHER_DATA_ERROR, payload: cityName })
	}
}
