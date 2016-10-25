var bad = 0
var good = 0
var badFortune = "Uh-oh! I see dark times ahead. Be wary of bands you've never heard of. You may find solace from your awful taste in music in The Knot Store from Portlandia. Quit rolling your own cigs. Lucky band: Best Coast."
var goodFortune = "HUZZAH! I forsee greatness in your future. Keep an eye out for your soul-mate at the next local house show. Lucky band: The Black Keys (you've probably heard of them already, but still)."
var neutralFortune = "Your future is too cloudy at this time. Perhaps leave the vape boutique and try again. Or just leave Portland, 'cause you know, it always rains here."


$(document).ready(function(){
  $("form#luck-form").submit(function(event) {

    event.preventDefault();

    $("input:checkbox[name=bluck]:checked").each(function() {
      bad += 1
    });

    $("input:checkbox[name=gluck]:checked").each(function() {
      good += 1
    });

    if (bad > good) {
      $("span#fortune").text(badFortune);
      $("span#fortune").fadeIn(1000);
    }
    else if (bad < good) {
      $("span#fortune").text(goodFortune);
      $("span#fortune").fadeIn(1000);
    }
    if (bad === good) {
      $("span#fortune").text(neutralFortune);
      $("span#fortune").fadeIn(1000);
    }


  });
});
