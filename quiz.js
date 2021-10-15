var ansOne=document.querySelector("#sixty");
var form=document.querySelector("#form");



function clickHandler(event){
    event.preventDefault();
    var score=0;
    if(document.getElementById("sixty").checked==true)
      score++;
    
    if(document.getElementById("obtuse").checked==true)
      score++;

    if(document.getElementById("acute").checked==true)
      score++;
    
      if(document.getElementById("right").checked==true)
      score++;
      
      console.log(score);

      var message="Your score: "+score.toString();
      document.getElementById("score").innerText=message;
     form.removeEventListener("submit",clickHandler);

}

form.addEventListener("submit",clickHandler);
