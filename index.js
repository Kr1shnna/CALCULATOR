// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";

}

function clearLast() {
    display.value = display.value.slice(0, -1); // Removes the last character
}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
    catch(error){
        display.value ="Error";
    }


}
