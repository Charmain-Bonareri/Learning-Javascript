// Madlibs game with js

function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){

var result = "";
result += "The " + "" +  myAdjective  + "" + myNoun + "" + myVerb + "to the store " + myAdverb
return result;
}

console.log (wordBlanks("dog", "big", "ran", "quickly"));
console.log (wordBlanks("bike", "slow", "flew", "slowly"));


// creating madlibs function with jquery
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);
 
        // $("#story").show();
 
        event.preventDefault();
    });
 });