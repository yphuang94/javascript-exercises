const convertToCelsius = function(x) {
  let celsius = 0;
  celsius = (x - 32) * .5556;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(y) {
  let fahrenheit = 0;
  fahrenheit = (y * 1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
