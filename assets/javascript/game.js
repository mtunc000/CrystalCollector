// Crystal Collector Game

var wins = 0;
var lost = 0;
//var result;
var randomGeneratedNumber;
var crystalValue;
var start = 0;

// Random number generator between 19 and 120
var resetAndStart= function(){ 
    $(".crystals").empty();

    var images= [
        '',
        '',
        '',
        '']
randomGeneratedNumber = Math.floor(Math.random()*101)+19;
    $(".result").html('randomGeneratedNumber:' + randomGeneratedNumber);

// random crystal selector

for (i=0; i<4; i++){
 // random crystal value generator
    crystalValue = Math.floor(Math.random()*11)+1;

    var crystal = $("<div>");
    crystal.attr({
        "class":'crystal',
        "data-random":crystalValue});

   
    crystal.html(crystalValue);
    $(".crystals").append(crystal);
    
    
}
}
resetAndStart();
// numbers collected from crystals and added towards the result 
//on click

    $(document).on('click',".crystal",function(){
        console.log($(this).attr("data-random"));
      
       let result = parseInt($(this).attr('data-random'));
        
         start += result;
        $(".start").html('Start : ' +start);

        if(start > randomGeneratedNumber) {
            lost++;
        $(".lost").html('Lost : ' +lost);

        start =0;
        resetAndStart();
        }
        
        else if(start === randomGeneratedNumber) {
            wins++;
        $(".wins").html('Wins : ' +wins); 
        start = 0;
        resetAndStart();
        }
        
    

    });



