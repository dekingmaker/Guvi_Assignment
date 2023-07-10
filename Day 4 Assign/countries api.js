//question 2
//use the rest countries api url and display all the country flag in console
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Request was successful, process the response
      var data = JSON.parse(request.responseText);
      console.log(data);
    } else {
      // Error handling
      console.error('An error occurred');
    }
  };


//question 3
//use rest countries api url and print all countries names,regions,subregion and populations
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Request was successful, process the response
      var data = JSON.parse(request.responseText);
      for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

}
    } else {
      // Error handling
      console.error('An error occurred');
    }
  };
