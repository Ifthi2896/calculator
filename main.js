const numbersButton = document.querySelectorAll(".btns");
let display = document.querySelector(".display");
const output = document.querySelector(".custom-output");
const clear = document.querySelector("#clear");
const equal = document.querySelector(".equal");

numbersButton.forEach((number) => {
        number.addEventListener('click', (events) => {
        let customKey = events.target.childNodes[0].data;
        display.innerHTML += customKey;
    });
        number.addEventListener("keydown", (event) => {
            
            if(event.key == '1'|| event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5'||
                event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '0'||
                event.key == '.' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'
            )

            display.innerHTML += event.key;
        })
});

clear.addEventListener('click', () => {
    display.innerHTML = "";
    output.innerHTML = "";
});

equal.addEventListener('click', evaluate);

function evaluate(){
    try{
        output.textContent = display.textContent == " " ? " " : eval(display.textContent);
    }
    catch(e){
        alert("Please Check Before and After Operand Values")
    }
}