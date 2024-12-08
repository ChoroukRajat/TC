let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let text = document.getElementById("textbox");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let title = document.getElementById("title");



button.disabled = false;

button.onclick = function(){
    if (text.value == "" || isNaN(Number(text.value))){
        window.alert("Please enter a valid temperature");
        return;
    }
    let temp = Number(text.value);
    if (op1.checked){
        result.textContent = (temp * (9/5) + 32).toFixed(2);
    } else if(op2.checked){
        result.textContent = ((temp - 32)* (5/9)).toFixed(2);
    }else{
        window.alert("Please choose one of the options");
    }


    if (text.value !== "" && !isNaN(Number(text.value))){
        if (temp<20 && op1.checked){
            button.style.backgroundColor = "blue"; 
            title.style.color = "blue";
        }else if(temp>=20 && op1.checked){
            button.style.backgroundColor = "red";
            title.style.color = "red";
        }else if (temp<68 && op2.checked){
            button.style.backgroundColor = "blue";
            title.style.color = "blue";
        }else if (temp>=68 && op2.checked){
            button.style.backgroundColor = "red";
            title.style.color = "red";
        }

    }
}

