var button = document.getElementById("microphone");
var isGreen = true;

button.addEventListener("click", function () {
    if (isGreen) {
        button.style.backgroundColor = "grey";
        isGreen = false;
    } else { 
        button.style.backgroundColor = "green";
        isGreen = true;
    }
});