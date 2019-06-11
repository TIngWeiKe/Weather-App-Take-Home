export const isCityExist = (array, cityId) => {
	for (let i = 0; i < array.length; i++) {
		if (!array) return false
		if (array[i].id === cityId) {
			return true
		}
	}
	return false
}

export const deleteDuplicate = (array, cityId) => {
	let output = array
	for (let i = 0; i < array.length; i++) {
		if (!array) return false
		if (array[i].id === cityId) {
			output.splice(i, 1)
			return output
		}
	}
}

export const fToC = f => {
	return (f - 273.15).toFixed(1) + '\xB0C'
}
