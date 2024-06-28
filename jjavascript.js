function clearDisplay(){
   document.forms['calculatorForm']['display'].value='';
}
function appendToDisplay(value){
    document.forms['calculatorForm']['display'].value += value;
}
function calculate() {
    const display = document.forms['calculatorForm']['display'];
    let result = eval(display.value);
    display.value = result;
}
