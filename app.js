'use strict'; 

console.log('sup')

var hours = ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm']


// Constructor Conversion Seattle Start
function Store(name, minimumCustomer, maximumCustomer, averageCookies){
  this.name = name;
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.averageCookies = averageCookies;
  this.cookieArray = [];
  this.totalCookies = 0;
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

  // start work on table

  // this.renderAsTable = function(){
  //   var table = document.getElementById('locations');
  //   var row = document.createElement('tr');
  //   var tableHeadCell = document.createElement('th');
  //   tableHeadCell.textContent = this.name;
  //   row.appendChild(tableHeadCell);

  //   for(var i = 0, i < 14; i++){
  //     var tableDataCell = document.createElement('td');
  //     tableDataCell.textContent = this.cookieArray[i];
  //     row.appendChild(tableDataCell);
  //   }
  //   table.appendChild(row);
  // };

  // end work on table

  this.calculateTotal = function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
    }
  console.log(this.totalCookies);
  }
}

var Seattle = new Store('Seattle', 23, 65, 6.3);

Seattle.produceCookiesSoldAllDay();
Seattle.calculateTotal();
Seattle.renderToPage();
// Seattle.renderAsTable();

var Tokyo = new Store('Tokyo', 3, 24, 1.2);

Tokyo.produceCookiesSoldAllDay();
Tokyo.calculateTotal();
Tokyo.renderToPage();

var Dubai = new Store('Dubai', 11, 38, 3.7);

Dubai.produceCookiesSoldAllDay();
Dubai.calculateTotal();
Dubai.renderToPage();

var Paris = new Store('Paris', 20, 38, 2.3);

Paris.produceCookiesSoldAllDay();
Paris.calculateTotal();
Paris.renderToPage();

var Lima = new Store('Lima', 2, 16, 4.6);

Lima.produceCookiesSoldAllDay();
Lima.calculateTotal();
Lima.renderToPage();

// generate random number ONCE
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
// console.log(getRandomIntInclusive);
// end generate random number ONCE