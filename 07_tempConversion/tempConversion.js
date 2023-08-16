const convertToCelsius = function (fahrenheitTemperature) {
  return fahrenheitTemperature === 32 ? 0 : Math.round((fahrenheitTemperature - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function (celsiusTemperature) {
  return celsiusTemperature === 0 ? 32 : Math.round((celsiusTemperature * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
