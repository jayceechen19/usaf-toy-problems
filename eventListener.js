document.addEventListener('DOMContentLoaded', (event) => {
    // your code goes here
    window.addEventListener("click", function() {
        alert("You clicked on the page!");
    })
    var button = document.querySelector("button");
    button.addEventListener("click", function(){
        alert("SOMEONE CLICKED THE BUTTON!!");
    });
    button.removeEventListener("click")
   
})

