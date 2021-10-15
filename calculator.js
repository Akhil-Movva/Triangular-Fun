var formArea=document.querySelector("#form-area");
var formHypotenuse=document.querySelector("#form-hypotenuse");

var legOne=document.querySelector("#leg-one");
var legTwo=document.querySelector("#leg-two");

var base=document.querySelector("#base");
var height=document.querySelector("#height");

function areaHandler(event){
    event.preventDefault();
    base=Number(base.value);
    height=Number(height.value);

    var area=1/2*base*height;
    area=area.toFixed(2);
    document.getElementById("msg-area").innerText="The area of the triangle for the inputted base and height is "+area.toString();
    event.target.disabled=true;

}

function hypotenuseHandler(event){
    event.preventDefault();

    legOne=Number(legOne.value);
    legTwo=Number(legTwo.value);

    var hyp=Math.sqrt((legOne*legOne)+(legTwo*legTwo));
    hyp=hyp.toFixed(2);
    document.getElementById("msg-hyp").innerText="The length of the hypotenuse for the inputted two legs is "+hyp.toString();
    event.target.disabled=true;

}

formArea.addEventListener("submit",areaHandler);
formHypotenuse.addEventListener("submit",hypotenuseHandler);
