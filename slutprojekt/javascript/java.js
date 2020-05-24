
var x=0;

$("#knapp2").show();
$("#knapp1").show();

$("#slider").css("overflow", "hidden");






$("#knapp2").click(function(){ //höger


      if (x>=2) {
          $("#slidersaker").animate({right:"0"});



          x=0;
      } else {
          $("#slidersaker").animate({right:"+=250"});






          x=x+1;
      }
      console.log(x);
});

$("#knapp1").click(function(){ // Vänster

console.log(x);
  if (x>=1) {

      $("#slidersaker").animate({right:"-=250"});

      x=x-1;
console.log(x);
  }else if (x <= 0){
      $("#slidersaker").animate({right:"+=500"});

      x = 2;
    }
    console.log(x);

});

// const loadingBar= document.getElementsByClassName
// ('loading-bar')[0]
// setInterval(() => {
// const datorStyle= getDatorSyle()
// const width = parseFloat(datorStyle.getPropertyValue('--width')) || 0
// loadingBar.Style.setProperty('--width' ,width + .1)
//
// }, 5)
