const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff537520a3msh51e60d1160f64adp17a046jsnb408d9d0d879',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWEATHER = (city)=>{
    cityName.INNERHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWEATHER(city.value)
})
getWeather("haryana")