let buttons = document.querySelectorAll("button");

buttons = Array.from(buttons);

let lastButton;

function handleClick(e) {
    if (lastButton == "=") {
        screen.innerText = "";
    }
    
    screen.innerText += e.target.innerText;
    lastButton = e.target.innerText;
}

function handleEquals(e) {
    screen.innerText = eval(screen.innerText);
    lastButton = e.target.innerText;
}

let addE = (button) => 
{
    if (button.innerText != "=") {
        button.addEventListener("click", handleClick);
    }
    else{
        button.addEventListener("click",handleEquals);
    }
}

buttons.forEach(addE);
let screen = document.querySelector("#display");


