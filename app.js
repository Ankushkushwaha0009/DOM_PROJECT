const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let StorePreviousColor = [] ; 
let show_color = document.querySelector(".show_color") ;
let index = -1  ; 

show_color.addEventListener("click", () => {
    console.log(StorePreviousColor)  ;  
    if(index >= 0 ) {
      document.body.style.backgroundColor = StorePreviousColor[index].colors ;
      color.textContent = StorePreviousColor[index].colors;
      index-- ;  
    }else{
      console.log("You don't have any more color ") ; 
    }
});

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  StorePreviousColor.push({index : StorePreviousColor.length , colors : colors[randomNumber]}) ; 
  index = StorePreviousColor.length - 2 ; 
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}