var firstAngle=document.querySelector("#angle-first");
var secondAngle=document.querySelector("#angle-second");
var thirdAngle=document.querySelector("#angle-third");

var firstSide=document.querySelector("#side-first");
var secondSide=document.querySelector("#side-second");
var thirdSide=document.querySelector("#side-third");

var formAngle=document.querySelector("#form-angle");
var formSide=document.querySelector("#form-side");




function angleHandler(event){
  event.preventDefault();

  firstAngle=Number(firstAngle.value);
  secondAngle=Number(secondAngle.value);
  thirdAngle=Number(thirdAngle.value);

   var sum=firstAngle+secondAngle+thirdAngle;
   var msg;
   if(sum==180)
     {
       msg="The 3 angles inputted form a triangle."; 
     }
     else{
       msg="The 3 angles inputted cannot form a triangle."; 
     }

     document.getElementById("msg-angle").innerText=msg;
     document.getElementById("rule-angle").innerHTML="Condition: The sum of angles in a triangle is equal to 180."
     formAngle.removeEventListener("submit",angleHandler);

}

function sideHandler(event){
    event.preventDefault();

    var a =Number(firstSide.value);
    var b=Number(secondSide.value);
    var c=Number(thirdSide.value);

     var x=a+b;
     var y=b+c;
     var z=a+c;

     var msg;

     if(x>=c&&y>=a&&z>=b)
      {
        msg="The lengths of the 3 sides inputted form a triangle.";  
      }
      else
       {
        msg="The lengths of the 3 sides inputted cannot form a triangle."; 
       }

       document.getElementById("msg-side").innerText=msg;
     document.getElementById("rule-side").innerText="Condition: The sum of the lengths of any 2 sides of a triangle should be greater than or equal to the length of the third side.";
     formSide.removeEventListener("submit",sideHandler);
    
  }

formAngle.addEventListener("submit",angleHandler);
formSide.addEventListener("submit",sideHandler);

