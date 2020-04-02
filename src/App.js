import React from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
// All this files are imported from its own js files

//Unique API Key
const theKEY = "2e8da17003bdff69a7e3e0845bdc6b53";
// the api key that I got from Open Weather

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  }
// The info thats being displayed put in a state

  getWeather = async (e) => {
    // making the api call so it can display with all its temperatures and results
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //Api call below, we put in the city and country and provide the hard coded unique API key
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${theKEY}&units=metric`);
    //JSON file returned and read
    // This variable fetches the api info from the map that was given  
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp , 
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description, 
        error: ""
      });
    } else {
      this.setState({
        temperature: "" ,
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter both the city and country into the inputs."
      });
    }
  }
  render() {
    return (
      <div>
        <div>
          <Titles />
        </div>
        <div>
          <Form getWeather={this.getWeather} />
          {/*the form that is displayed*/}
          <Weather 
            temperature={this.state.temperature }  
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />
          {/*the weather that is displayed with all its states that is being displayed*/}
        </div>      
      </div>
    );
  }
};

export default App;
