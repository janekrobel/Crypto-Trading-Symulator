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

