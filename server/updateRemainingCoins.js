const axios = require("axios");
const coinController = require('./apiControllers/coinController');

const options = {
  method: 'GET',
  url: 'https://coinpaprika1.p.rapidapi.com/coins',
  headers: {
    'X-RapidAPI-Key': '9746770ea5msha2e9fffa072bdedp14057djsn321baee01629',
    'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
  }
};

const main = () => {
    axios.request(options).then((response)=>{
        console.log(response);
    })
};

main();


const changeRemaining = (listOfRemaing) => { 
    axios.request(options).then(function (response) {
        listOfRemaing.forEach((_coin)=>{
            //add uuid of the other coins
            let current = response.data[_coin.uuid];
            let coin = {
                "price": current.price,
                "change": current.change,
                "volume" : current.volume,
                "marketCap" : current.marketCap,
            }
            coinController.setCoin(coin);
        });
        
    }).catch(function (error) {
        console.error(error);
    })
};