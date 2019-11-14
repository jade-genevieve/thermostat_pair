$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=6f1281694fca5a1accbaa74bb5b5e6da&units=metric', function(data) {
    $('#api').text(data.main.temp);
  })

  var thermostat = new Thermostat();
  updateTemperature();

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $('#city').text(city)
    displayWeather(city);
  })
  
  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=6f1281694fca5a1accbaa74bb5b5e6da';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#api').text(data.main.temp);
    })
  }
   
  

});

