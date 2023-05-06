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
    let value = document.getElementById("valueSpent");
    value = value.innerHTML.substring(str.indexOf(" ") + 1);
    value = parseFloat(value);

    let availableBalance = document.getElementById("availableBalance");
    availableBalance = availableBalance.innerHTML.substring(str.indexOf(" ") + 1);
    availableBalance = parseFloat(availableBalance);
    console.log(availableBalance - value);
    if(availableBalance - value < 0){
        window.location.replace("http://localhost:3001/errorMessage=cannot_add_position");
    }   
}