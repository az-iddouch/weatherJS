//init Storage
const storage = new Storage;
//get stored location data
const weatherLocation = storage.getLocationData();

//init the weather obj
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//init the UI obj 
const ui = new UI;

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

//Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //change location
    weather.changeLocation(city, country);

    //set location in LS
    storage.setLocationData(city, country);

    //get and display weather
    getWeather();
    
    //close the modal
    $('#locModal').modal('hide');
});


function getWeather(){
    weather.getWeather()
    .then(res => {
        ui.paint(res);
        console.log(res);
    })
    .catch(err => console.log(err));
}








