// Crystal Collector Game

var wins;
var lost;
var result;
var randomGeneratedNumber;
var crystalValue;
var start = 0;

// Random number generator between 19 and 120

randomGeneratedNumber = Math.floor(Math.random()*101)+19;
    $(".result").html('randomGeneratedNumber:' + randomGeneratedNumber);

    console.log(randomGeneratedNumber);


// random crystal selector

for (i=0; i<4; i++){
    var crystal = $("<div>");

     // random crystal value generator
    crystalValue = Math.floor(Math.random()*11)+1;
    crystal.attr({
        "class":'crystal',
        "data_random":crystalValue});

    console.log (crystal);
   
    $(".crystals").append(crystal);
    crystal.html(crystalValue);
    console.log(crystalValue);
}

// numbers collected from crystals and added towards the result 
//on click

    $(document).on('click',".crystal",function(){
        console.log($(this).attr("data_random"));
      
       result = parseInt($(this).attr("data_random"));
        
         start += result;
        $(".start").html('Start:' +start);

    })



