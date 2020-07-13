'use strict'; 

var location = [seattle, tokyo, dubai, paris, lima];

// for (var i = 0, i < 5, i++){

// }
// to iterate through each location

var seattle = {
  name: 'Seattle',
  minimumCustomer: 23,
  maximumCustomer: 65,
  averageCookies: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
} 

var tokyo = {
  name: 'Tokyo',
  minimumCustomer: 3,
  maximumCustomer: 24,
  averageCookies: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
} 

var dubai = {
  name: 'Dubai',
  minimumCustomer: 11,
  maximumCustomer: 38,
  averageCookies: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
} 

var paris = {
  name: 'Paris',
  minimumCustomer: 20,
  maximumCustomer: 38,
  averageCookies: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
} 

var lima = {
  name: 'Lima',
  minimumCustomer: 2,
  maximumCustomer: 16,
  averageCookies: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  cookiesPerHour : function(){
    var locationList = document.getElementById('averages');
    var newLocation = document.createElement('li');
    newLocation.textContent = this.hours.length + ':' + getRandomIntInclusive[i];
    parent.appendChild(newLocation);
  }
} 

lima.cookiesPerHour();

// generate random number ONCE
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  // console.log(getRandomIntInclusive);
// end generate random number ONCE
getRandomIntInclusive();

