const convertToCelsius = function (fahrenheitTemperature) {
  if (fahrenheitTemperature === 32) return 0;
  let celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  celsiusTemperature = (Math.round(celsiusTemperature * 10) / 10).toFixed(1);
  return parseFloat(celsiusTemperature);
};

const convertToFahrenheit = function (celsiusTemperature) {
  if (celsiusTemperature === 0) return 32;
  let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
  fahrenheitTemperature = (Math.round(fahrenheitTemperature * 10) / 10).toFixed(1);
  return parseFloat(fahrenheitTemperature);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
