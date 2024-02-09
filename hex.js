
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let storeColor = [];
let currentIndex = -1; // Initialize current index to -1
let show_color = document.querySelector(".show_color");


show_color.addEventListener("click", () => {
        if (currentIndex >= 0) {
        console.log(storeColor[currentIndex]) ;  
        document.body.style.backgroundColor = storeColor[currentIndex].color;
        color.textContent = storeColor[currentIndex].color;
        currentIndex--; // Decrement current index for next click
    } else {
        console.log("No more previous colors to show.");
    }
});


btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()] ;
    }
    storeColor.push({ index: storeColor.length, color: hexColor }) ; // Store index along with color
    currentIndex = storeColor.length - 2 ;  // Update current index to the last color added
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor ;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
