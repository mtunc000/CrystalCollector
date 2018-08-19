// Crystal Collector Game

var wins;
var lost;
var result;
var randomGeneratedNumber;
var crystalValue;

// Random number generator between 19 and 120

randomGeneratedNumber = Math.floor(Math.random()*101)+19;
    $(".result").html('randomGeneratedNumber:' + randomGeneratedNumber);

    console.log(randomGeneratedNumber);


// random crystal selector

for (i=0; i<4; i++){
    var crystal = $("<div>");
    crystal.attr("class",'crystal')
    console.log (crystal);

    // random crystal value generator

    crystalValue = Math.floor(Math.random()*11)+1;
    $(".crystals").append(crystal);
    crystal.html(crystalValue);
    console.log(crystalValue);
}



