class Weather {
    constructor(city, countryCode) {
        this.apiKey = 'd6d93645551c2eae206d4c7154340145';
        this.city = city;
        this.countryCode = countryCode;
    }

    //fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`)

        const responseData = await response.json();
        
        return responseData; 
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}