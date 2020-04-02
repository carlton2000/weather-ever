import React from "react";
import "./styles.css";
// import Button from 'react-bootstrap/Button';

const Form = props => (
	<form onSubmit={props.getWeather} className="weatherHeading"> 
		<input type="text" name="city" placeholder="Enter City.."/> &ensp;&ensp;
		<input type="text" name="country" placeholder="Enter Country..."/> &ensp;&ensp;
		<button variant="outline-danger">Submit</button>

	</form>
);

export default Form;