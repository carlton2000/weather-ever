import React from "react";
import "./styles.css";
import weather from './images/weather.jpg';

const Titles = () => (
	<div>
		<h1 className="weatherHeading">Weather App</h1>
		<p className="weatherslogon">Enter a city an the province an we'll get the weather :</p>
		<img src={weather} alt="logo" className="img"/>
		<br/>
		<br/>
	</div>
);

export default Titles;