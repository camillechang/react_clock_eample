var cityTimezones = require("city-timezones");

//get first matched timezone
const getTimezonesByCity = (cityName) => {
  let cityLookup;
  let timeZone;
  console.log("getTimezonesByCity:", cityName);

  if (cityName === "London") {
    timeZone = "Europe/London";
  } else {
    cityLookup = cityTimezones.lookupViaCity(cityName);
    timeZone = cityLookup[0].timezone;
  }

  console.log("timeZone:", timeZone);
  return timeZone;
};

export const getCurrentDate = (cityName) => {
  const zone = getTimezonesByCity(cityName);
  let newDate = new Date();
  const options = {
    weekday: "long",
    timeZone: zone,
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = newDate.toLocaleDateString("en-US", options);

  const time = newDate.toLocaleTimeString("en-US", options);

  const currentDate = new Date(date).toDateString(); //expected result
  console.log("date:", currentDate);

  const currentTime = new Date(time).toLocaleTimeString(); //expected result
  console.log("date2:", currentTime);

  return {
    currentDate, //Sun Aug 29 2021
    currentTime, //16:42:39
  };
};

// test code
// let timeZone = getTimezonesByCity("Sydney");
// getCurrentDate(timeZone);

// timeZone = getTimezonesByCity("Seoul");
// getCurrentDate(timeZone);
// timeZone = getTimezonesByCity("London");
// getCurrentDate(timeZone);
// timeZone = getTimezonesByCity("New York");
// getCurrentDate(timeZone);
