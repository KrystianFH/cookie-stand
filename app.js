'use strict'; 

console.log('sup')

var hours = ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm', 'Daily Total']



// Seattle Store Data
var seattleStore = {
  name: 'Seattle',
  minimumCustomer: 23,
  maximumCustomer: 65,
  averageCookies: 6.3,
  cookieArray : [],
  totalCookies : 0,

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minimumCustomer, this.maximumCustomer);
    // console.log(myRandomNum);
    return myRandomNum; // returned to use myRandomNum in a loop to run 14x
  },

  produceCookiesSoldAllDay : function (){
    // get customers, multiply 
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookies;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      console.log(this.cookieArray);
      // done with once
    }
  },

  renderToPage : function(){
    for(var i = 0; i < 14; i++){
      var hourlyAverages = document.getElementById('averagesSeattle');
      var eachHourCookiesPerHour = document.createElement('li');
      eachHourCookiesPerHour.textContent = hours[i] + ' : ' + this.cookieArray[i] + ' cookies';
      hourlyAverages.appendChild(eachHourCookiesPerHour);
      console.log(eachHourCookiesPerHour.textContent);
    }
  },

  calculateTotal : function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
    }
  console.log(this.totalCookies);
  }
}

seattleStore.produceCookiesSoldAllDay();
seattleStore.calculateTotal();
seattleStore.renderToPage();

// End Seattle Store Data

// Tokyo Store Data
var tokyoStore = {
  name: 'Tokyo',
  minimumCustomer: 3,
  maximumCustomer: 24,
  averageCookies: 1.2,
  cookieArray : [],
  totalCookies : 0,

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minimumCustomer, this.maximumCustomer);
    // console.log(myRandomNum);
    return myRandomNum; // returned to use myRandomNum in a loop to run 14x
  },

  produceCookiesSoldAllDay : function (){
    // get customers, multiply 
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookies;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      console.log(this.cookieArray);
      // done with once
    }
  },

  renderToPage : function(){
    for(var i = 0; i < 14; i++){
      var hourlyAverages = document.getElementById('averagesTokyo');
      var eachHourCookiesPerHour = document.createElement('li');
      eachHourCookiesPerHour.textContent = hours[i] + ' : ' + this.cookieArray[i] + ' cookies';
      hourlyAverages.appendChild(eachHourCookiesPerHour);
      console.log(eachHourCookiesPerHour.textContent);
    }
  },

  calculateTotal : function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
    }
  console.log(this.totalCookies);
  }
}

tokyoStore.produceCookiesSoldAllDay();
tokyoStore.calculateTotal();
tokyoStore.renderToPage();

// End Tokyo Store Data

// Dubai Store Data
var dubaiStore = {
  name: 'Dubai',
  minimumCustomer: 11,
  maximumCustomer: 38,
  averageCookies: 3.7,
  cookieArray : [],
  totalCookies : 0,

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minimumCustomer, this.maximumCustomer);
    // console.log(myRandomNum);
    return myRandomNum; // returned to use myRandomNum in a loop to run 14x
  },

  produceCookiesSoldAllDay : function (){
    // get customers, multiply 
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookies;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      console.log(this.cookieArray);
      // done with once
    }
  },

  renderToPage : function(){
    for(var i = 0; i < 14; i++){
      var hourlyAverages = document.getElementById('averagesDubai');
      var eachHourCookiesPerHour = document.createElement('li');
      eachHourCookiesPerHour.textContent = hours[i] + ' : ' + this.cookieArray[i] + ' cookies';
      hourlyAverages.appendChild(eachHourCookiesPerHour);
      console.log(eachHourCookiesPerHour.textContent);
    }
  },

  calculateTotal : function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
      
      
    }
  console.log(this.totalCookies);
  }
}

dubaiStore.produceCookiesSoldAllDay();
dubaiStore.calculateTotal();
dubaiStore.renderToPage();

// End Dubai Store Data

// Paris Store Data
var parisStore = {
  name: 'Paris',
  minimumCustomer: 20,
  maximumCustomer: 38,
  averageCookies: 2.3,
  cookieArray : [],
  totalCookies : 0,

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minimumCustomer, this.maximumCustomer);
    // console.log(myRandomNum);
    return myRandomNum; // returned to use myRandomNum in a loop to run 14x
  },

  produceCookiesSoldAllDay : function (){
    // get customers, multiply 
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookies;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      console.log(this.cookieArray);
      // done with once
    }
  },

  renderToPage : function(){
    for(var i = 0; i < 14; i++){
      var hourlyAverages = document.getElementById('averagesParis');
      var eachHourCookiesPerHour = document.createElement('li');
      eachHourCookiesPerHour.textContent = hours[i] + ' : ' + this.cookieArray[i] + ' cookies';
      hourlyAverages.appendChild(eachHourCookiesPerHour);
      console.log(eachHourCookiesPerHour.textContent);
    }
  },

  calculateTotal : function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
      
    }
  console.log(this.totalCookies);
  }
}

parisStore.produceCookiesSoldAllDay();
parisStore.calculateTotal();
parisStore.renderToPage();

// End Paris Store Data

// code review start 6/14

// Lima Store Data
var limaStore = {
  name: 'Lima',
  minimumCustomer : 2, // object
  maximumCustomer : 16, // object
  averageCookies : 4.6, // object
  cookieArray : [],
  totalCookies : 0,

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minimumCustomer, this.maximumCustomer);
    // console.log(myRandomNum);
    return myRandomNum; // returned to use myRandomNum in a loop to run 14x
  },

  produceCookiesSoldAllDay : function (){
    // get customers, multiply 
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookies;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      console.log(this.cookieArray);
      // done with once
    }
  },

  renderToPage : function(){
    for(var i = 0; i < 14; i++){
      var hourlyAverages = document.getElementById('averagesLima');
      var eachHourCookiesPerHour = document.createElement('li');
      eachHourCookiesPerHour.textContent = hours[i] + ' : ' + this.cookieArray[i] + ' cookies';
      hourlyAverages.appendChild(eachHourCookiesPerHour);
      console.log(eachHourCookiesPerHour.textContent);
    }
  },

  calculateTotal : function (){
    for(var i = 0; i < 14; i++){
      this.totalCookies = this.totalCookies + this.cookieArray[i];
      var hourlyAverages = document.getElementById('averagesLima');
      var dailyCookieTotal = document.createElement('li');
      dailyCookieTotal.textContent = hours[15] + " : " + this.totalCookies; 
    }
  console.log(this.totalCookies);
  }
}

limaStore.produceCookiesSoldAllDay();
limaStore.calculateTotal();
limaStore.renderToPage();

// End Lima Store Data

// generate random number ONCE
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
// console.log(getRandomIntInclusive);
// end generate random number ONCE


// === lab 7 notes on constructors ===

// function Student(food, car, color, from, hobby){
  
//     this.favoriteFood = food;
//     this.favoriteCar = car;
//     this.favoriteColor = color;
//     this.whereYouFrom = from;
//     this.favoriteHobby = hobby; 
// }

// // `new` is a keyword used exclusively to call constructor functions 
// //it is the one and only thing actually differentiating how to run the function for JavaScript

// var paul = new Student ('brats', 'Outback', 'green', 'Saint Louis', 'backpacking');
// var mike = new Student ('salmon', 'Ford', 'black', 'Chicago', 'photography');
// var jack = new Student('salad', 'volvo', 'turquoise', 'California', 't-shirt making' )
// var marchael = new Student('sinigang', 'subaru', 'green', 'Seattle', 'video games');

// console.log (jack, marchael, paul, mike);

// this adds a goToSchool method to the objects made by Student
// prototype means `list` of functions to add later and allows us to clean up our code and helps to meaningfully organize data
// Student.prototype.goToSchool = function
