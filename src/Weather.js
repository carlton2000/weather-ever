import React from "react";

const Weather = props => (
	<div className="weatherHeading">
	 {	
	 	props.city && props.country && <p> Location: 
	 		<span> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p> Temperature: 
	 		<span> { props.temperature }	</span> °C
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p> Humidity: 
	 		<span> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p> Conditions: 
	 		<span> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p>{ props.error }</p>  
	 }
	</div>
);

export default Weather;