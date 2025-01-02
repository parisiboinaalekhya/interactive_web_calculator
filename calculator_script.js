let input = document.getElementById("in");
let buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", posse);
}

let output = "";

function posse(event) {
  let buttonValue = event.target.innerHTML;

  if (buttonValue === "=") {
    output = eval(input.value);
    input.value = output;
  } 
  else if (buttonValue === "Ac") {
    output = "";
    input.value = output;
  } 
  else if (buttonValue === "Del") {
    output = output.substring(0, output.length - 1);
    input.value = output;
  } 
  
  else if (buttonValue === "sin") {
    let value = parseFloat(input.value);
      output = Math.sin(value * (Math.PI / 180));
      input.value = output;
    
  }

  else if (buttonValue === "cos") {

    let value = parseFloat(input.value);
    
      output = Math.cos(value * (Math.PI / 180));
      input.value = output;
    
  }
   else if (buttonValue === "tan") {
    let value = parseFloat(input.value);
    output = Math.tan(value * (Math.PI / 180));
    input.value = output;
    
  } else if (buttonValue === "log") {
    let value = parseFloat(input.value);
    output = Math.log10(value);
    input.value = output;
    
  }
   else if (buttonValue === "^") {
    output = input.value + "**";
    input.value = output;
  } 
  else if (buttonValue === "%") {
   output=input.value+"%";
   input.value=output;
      
  }
    
  
  else {
    output += buttonValue;
    input.value = output;
  }
}
addEventListener("keydown", dis);
function dis(event) {
  if (event.key == "Enter") {
    output = eval(input.value);
    input.value = output;
  } else if (event.key == "Delete") {
    output = " ";
    input.value = output;
  } else if (event.key == "=") {
    output = eval(input.value);
    input.value = output;
  } else if (event.key == "Backspace") {
    output = output.substring(0, output.length - 1);
    input.value = output;
  }
}
