// the multidementinal array with names and weights
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  // to revers the order of the array so sun is first
  planets.reverse();
// the vars that html uses
  var input= document.getElementById("user-weight");
  var selectL= document.getElementById("planets");
  var submitEl = document.getElementById("calculate-button");
  var output = document.getElementById("output");
// the selsect button
   planets.forEach(function(item) {
     // the multidementianl array 0 bing the name place holder
    var name = item[0];
    // created the element option to input the array nmaes
    var opt = document.createElement("option");
    //will select from parent element to put in the  new element
    var selectL= document.getElementById("planets");
    // the way you get the values from the array
    opt.setAttribute("value", name);
    //the way you get the text form an array 'the planet name'
    opt.innerHTML = item[0];
    // how it all comes togehter buy attaching it
    selectL.appendChild(opt);
   });
// the submit button (e) stands for event
  submitEl.onclick = function(e) {
// the valuse of the user input
    var userWeight = input.value;
    // the valuse of the planets weight
    var userChoice = selectL.value;
    //the placement of the planets in muti-array
    var weight = 0;
    //for  each  short cut way of doing  for loop
    planets.forEach( function(item) {

      var name = item[0];
      //the users choice of planet
      if (userChoice === name) {
        //the wight that will then be calculated  multi-array position
        weight = item[1];
      }
    });
    // the  asnswer to the calculation
    var result = weight * userWeight;
    output.innerHTML= 'If you were on ' + userChoice + ', you would weigh '+ result +'lbs!';
    
   }
  
  