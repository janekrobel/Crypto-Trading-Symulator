const desc = document.getElementById('desc')
const img = document.getElementById('img')

const errordesc = document.getElementById('error-desc')
const errorimg = document.getElementById('error-img')

function valid(){
    reset();
    let valid = true;

    if(!desc.value){
        valid = false;
        desc.classList.add("error-input")
        errordesc.innerText = "Uzupełnij"
    }
  
    return valid;

}

function reset(){
    desc.classList.remove("error-input")
    errordesc.innerText = ""
    
}


function validPosition(){

    let valid = true;

    let priceInput = document.getElementById("priceInput");

    let valueInput = document.getElementById("valueSpent");
    let value = valueInput.innerHTML.split(": ")[1];
    let valueFloat  = parseFloat(value);

    let avBalanceInput = document.getElementById("availableBalance");
    let avBalance = avBalanceInput.innerHTML.split(": ")[1];
    let avBalanceFloat = parseFloat(avBalance);
    
    if(avBalanceFloat < valueFloat){
        priceInput.classList.add("error-input");
        return false;
    }
    return true;
    

    
}