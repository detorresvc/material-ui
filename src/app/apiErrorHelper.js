export const getFirstErrorMessage = (data) => {
	for(let key in data){
		return data[key][0]
	}

	return ''
}
