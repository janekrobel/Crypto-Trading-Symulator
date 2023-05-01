const myTable = document.getElementById('coinTable');  
const select = document.getElementById('coin_id');
const priceInput = document.getElementById('priceInput');
const currentPrice = document.getElementById('currentPrice');
const valueSpent = document.getElementById('valueSpent');
const messageDiv = document.getElementById('messageDiv');
const mess = document.getElementById('message');
const errorMessage = document.getElementById('errorMessage');


// let tableCounter = 1;

// for (let row of myTable.rows) {
//     const btn = document.getElementById('btnCoin'+ tableCounter);
  
    
//     btn.addEventListener('click', function handleClick(){
//         select.value = row.cells[0];
//     });
//     tableCounter++;

// }   

// const balance = document.getElementById('balance');  

function changeAmounts(){
    valueSpent.innerHTML = "value in usd: " +  myTable.rows[select.value].cells[3].innerHTML * priceInput.value;
}

function changeSelect(){
    currentPrice.innerHTML="Current price: " + myTable.rows[select.value].cells[3].innerHTML;
}

function changeCurrent(id){
    console.log("Funkcja = " , id)
    select.value = id;
    window.scrollTo(0, 0)
    currentPrice.innerHTML="Current price: " + myTable.rows[id].cells[3].innerHTML;
    
}


const message = messageDiv.innerHTML;
const m = mess.innerHTML;
const e = errorMessage.innerHTML;

console.log("err =" , e)
console.log("message =" , m)
if(m !== '' || e !== ''){
    setTimeout(function(){
        var div = document.getElementById('messageDiv');
        div.style.opacity = 0;
    }, 10);
    setTimeout(function(){
        var div = document.getElementById('messageDiv');
        div.style.display = 'none';
    }, 4000);
}
else{
    var div = document.getElementById('messageDiv');
    div.style.display = 'none';
}