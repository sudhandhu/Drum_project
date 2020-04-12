

for(var i= 0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var buttonInnerHtml=this.innerHTML;

buttonSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);


});

document.addEventListener("keypress",function(event){

buttonSound(event.key);
buttonAnimation(event.key);

});

}
function buttonSound(button)
{switch(button){
case "w":
      var kick =new Audio("sounds/kick-bass.mp3");
       kick.play();
break;

case "a":
var snare=new Audio("sounds/snare.mp3");
snare.play();
break;

case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
break;

case "d":
     var tom1=new Audio("sounds/tom-1.mp3");
     tom1.play();
break;

case "j":
     var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;

case "k":
var tom4 =new Audio("sounds/tom-4.mp3");
tom4.play();
break;

case "l":
var crash=new Audio("sounds/crash.mp3");
crash.play();
break;

default:console.log(button);
}}


function buttonAnimation(button)
{
  var activeButton = document.querySelector("."+ button);
  console.log("."+ button);
  console.log(activeButton);

  activeButton.classList.add("pr");
  setTimeout(function(){
    activeButton.classList.remove("pr");
  },100);
}
