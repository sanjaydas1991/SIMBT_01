const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb8d006145msh0706a0cbe4a5214p1caca1jsn98430dfbd00c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (city) =>{
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)

    .then(response=>response.json())
	.then(response => {
		
		console.log(response)

		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.json
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		min_temp.innerHTML=response.min_temp
		max_temp=response.max_temp
		wind_speed.innerHTML=response.wind_speed
		wind_degree.innerHTML=response.wind_degree
		sunsrise.innerHTML=response.sunsrise
		sunset.innerHTML=response.sumset
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
});
getWeather(city)

