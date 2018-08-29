class UI {
    constructor () {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');        
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].description; 
        this.string.textContent = `${Math.round(weather.main.temp - 273.15)} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `feels like: ${weather.weather[0].main}`;
        this.pressure.textContent = `pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
    }
}