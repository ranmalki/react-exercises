import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
	
	const [weeklyForecast, setweeklyForecast] = useState([]);
	const days=['Mon','Tue','Wed','Thu','Fri'];
	const [coldest, setColdest] = useState(null);
	const [hottest, setHottest] = useState(null);

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(results => results.json())
			.then(weeklyForecast => setweeklyForecast(weeklyForecast))
	}, [])

	useEffect(() => {
		if (weeklyForecast.length > 0) {
		let coldest = 0;
		let hottest = 0;
		setHottest(days[0])
		setColdest(days[0])
		for (let i = 0; i < weeklyForecast.length; i++) {
			if (weeklyForecast[i].temperature > weeklyForecast[hottest].temperature) {
				hottest=i;
				setHottest(days[weeklyForecast[i].day-2]);
			}

			if (weeklyForecast[i].temperature < weeklyForecast[coldest].temperature) {
				coldest=i;
				setColdest(days[weeklyForecast[i].day-2]);
			}
		}}
	}, [weeklyForecast]);

	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is: {hottest}</strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is: {coldest}</strong>
			</div>
		</div>
	);
}

export default Weather;