'use strict'; 

console.log('sup')

var hours = ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm']
var storesArray = []

// Constructor Conversion Seattle Start
function CookieStore(name, minimumCustomer, maximumCustomer, averageCookies){
  this.name = name;
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.averageCookies = averageCookies;
  this.cookieArray = [];
  this.totalCookies = 0;
  storesArray.push(this);

  // prototype is the List of Methods that gets added to the object
  this.renderStoreToTable = function(){
    // make a row
    // 1. target: table
    var tableElement = document.getElementById('locations');
    // 2. make row
    var rowElement = document.createElement('tr');
    //   2.5 content of cells
    
    // put the name in the table
    // Steps to render name in table
    // 1. target : name cell goes in the seattle row
    // 2. make cell
    var titleCellElement = document.createElement('th');
    //   2.5 content
    titleCellElement.textContent = this.name;
    // 3. append cell to row
    rowElement.appendChild(titleCellElement);
    // put the first cookie value to the left of the name
    // put total cookies in the last row
    // total for an hour
    for(var p = 0; p < hours.length; p++){
      var hourlyCookiesPerStore = document.createElement('td');
      hourlyCookiesPerStore.textContent = this.cookieArray[p];
      rowElement.appendChild(hourlyCookiesPerStore);
    }

    var totalDailyCookiesPerStore = document.createElement('td');
    totalDailyCookiesPerStore.textContent = this.totalCookies;
    rowElement.appendChild(totalDailyCookiesPerStore);

    tableElement.appendChild(rowElement);

  };

  this.produceRandomCustomersPerHour = function(){
    var myRandomNum = getRandomIntInclusive(this.minimumCustomer, this.maximumCustomer);
    // console.log(myRandomNum);
    return myRandomNum; // returned to use myRandomNum in a loop to run 14x
  };

  this.produceCookiesSoldAllDay = function (){
    // get customers, multiply 
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookies;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      console.log(this.cookieArray);
      // done with once
    }
  };

  this.renderToPage = function(){
    for(var i = 0; i < 14; i++){
      var hourlyAverages = document.getElementById('averages' + this.name);
      var eachHourCookiesPerHour = document.createElement('li');
      eachHourCookiesPerHour.textContent = hours[i] + ' : ' + this.cookieArray[i] + ' cookies';
      hourlyAverages.appendChild(eachHourCookiesPerHour);
      console.log(eachHourCookiesPerHour.textContent);
    }
    var totalDailyCookies = document.createElement('li');
    totalDailyCookies.textContent = 'Daily Total : ' + this.totalCookies + ' cookies';
    hourlyAverages.appendChild(totalDailyCookies);
  };

  this.calculateTotal = function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
    }
  console.log(this.totalCookies);
  }
}

function tableHeader(){
  var tableElement = document.getElementById('locations');
  var rowElement = document.createElement('tr');
  var placeholderCell = document.createElement('td');
  rowElement.appendChild(placeholderCell);

  for(var i = 0; i < hours.length; i++){
    var hoursCell = document.createElement('td');
    hoursCell.textContent = hours[i];
    rowElement.appendChild(hoursCell);
  }

  var dailyLocationTotal = document.createElement('td');
  dailyLocationTotal.textContent = 'Daily Location Totals';
  rowElement.appendChild(dailyLocationTotal);

  tableElement.appendChild(rowElement);
}

function tableFooter(){
  var tableElement = document.getElementById('locations');
  var rowElement = document.createElement('tr');
  var footerHeadCell = document.createElement('td');
  footerHeadCell.textContent = 'Hourly Totals';
  rowElement.appendChild(footerHeadCell);
  tableElement.appendChild(rowElement);

  for(var i = 0; i < hours[0]; i++){
    var totalCookiesThisHour = document.createElement('td');
    totalCookiesThisHour.textContent = storesArray.length[0]
    rowElement.appendChild(totalCookiesThisHour);
    tableElement.appendChild(rowElement);
  }
}

var Seattle = new CookieStore('Seattle', 23, 65, 6.3); 
var Tokyo = new CookieStore('Tokyo', 3, 24, 1.2); //storesArray[1]
var Dubai = new CookieStore('Dubai', 11, 38, 3.7); //storesArray[2]
var Paris = new CookieStore('Paris', 20, 38, 2.3); //storesArray[3]
var Lima = new CookieStore('Lima', 2, 16, 4.6); //storesArray[4]

tableHeader();

for(var i = 0; i < storesArray.length; i++){
  storesArray[i].produceCookiesSoldAllDay();
  storesArray[i].calculateTotal();
  storesArray[i].renderStoreToTable();
}
// makeAStore();


// generate random number ONCE
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
// console.log(getRandomIntInclusive);
// end generate random number ONCE

var newLocationForm = document.getElementById('new-location');

newLocationForm.addEventListener('submit', makeAStore);

function makeAStore(event){
  event.preventDefault();

  var storeName = event.target.name.value;
  var storeMinCustomer = event.target.minimumCustomer.value;
  var storeMaxCustomer = event.target.maximumCustomer.value;
  var storeAvgCookies = event.target.averageCookies.value;

  var newStore = new CookieStore(storeName, storeMinCustomer, storeMaxCustomer, storeAvgCookies);

  var tableElement = document.getElementById('locations');
  tableElement.innerHTML = '';

  tableHeader();

  for(var i = 0; i < storesArray.length; i++){
    storesArray[i].produceCookiesSoldAllDay();
    storesArray[i].calculateTotal();
    storesArray[i].renderStoreToTable();
  }
  // newStore.produceCookiesSoldAllDay();
  // newStore.calculateTotal();
  // newStore.renderStoreToTable();
  tableFooter();
  console.log(newStore);

  // newStore.renderStoreToTable(storesArray);
}
tableFooter();



// // Start Class 9 notes
// // We LISTEN for an event
// // adding an event listener - a function that fires off when javascript HEARS an event take place

// var clicker = document.getElementById('click me');
// var mouseover = document.getElementById('mouseover-me');
// var dblclicker = document.getElementById('dblclick-me');

// clicker.addEventListener('click', function (){
//   console.log('you clicked me');
// });

// DOMELEMENT.addeventlistener('EVENT_TYPE', <function that gets called back to later)
// DOMELEMENT.addEventListener('EVENT_TYPE', CALLBACK FUNCTION)

// function popUpAlert(){
//   alert('stop mousing over meeeeeeeeeee')
// }

// mouseovererElement.addEventListener(mouseover, popUpAlert());