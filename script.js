// To compare two JSON have the same properties without order



var obj1 = {name: "person 1", age:5}
var obj2 = {age :5, name: "person 2"};
console.log(JSON.stringify(obj1,obj2));

// ================================================================================================


// Q2 use the rest countries' API URL and display all the 
// country in the console.

// ----------------------------------------------------------------
var countries = new XMLHttpRequest();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.send();

countries.onload = function () {
  var data = countries.response;


var result = JSON.parse(data);
for(i=0; i<result.length; i++) {
    console.log(result[i].flag);
}
}
// ------------------------------------------------------------------------

// ===============================================================================

// Q3  use the same rest countries and print all countries names, region , sub-region and populations

var countries = new XMLHttpRequest();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.send();

countries.onload = function () {
  var data = countries.response;


var result = JSON.parse(data);

for(i=0; i<result.length; i++) {
    console.log(result[i].name.common + " "+ result[i].region+" "+result[i].subregion+" "+result[i].population);
}
 }

//  -------------------------------------------------------------------------------------------------    


