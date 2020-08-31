function buttonclicked(btn) {
    let inputBox = document.querySelector('.input1');
    let outputBox = document.querySelector('.output');
    if (btn == '=') {
    try{
        outputBox.innerText = eval(inputBox.value)
     } catch(error) {
        outputBox.innerText = "Error";
     }
    } else if(btn == 'AC') {
        inputBox.value = "";
        outputBox.innerText = "0";
   } else {
        inputBox.value = inputBox.value + btn;
   }
}