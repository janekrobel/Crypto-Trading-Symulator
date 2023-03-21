const coinController = require('./apiControllers/coinController');

const axios = require("axios");

let coins = [];
let allCoins = [];

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '100',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '9746770ea5msha2e9fffa072bdedp14057djsn321baee01629',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

setInterval(updateCoins,300000);

const updateCoins = () => {
  allCoins = coinController.getAllCoins();
  axios.request(options).then(function (response) {
    coins = response.data.data.coins;
    console.log(coins);
    coins.forEach((_coin)=>{
      let coin = {
        "uuid" : _coin.uuid,
        "price" : _coin.price,
        "marketCap" : _coin.marketCap,
        "volume" : _coin["24hVolume"],
        "change" : _coin.change,
    }  
      coinController.setCoin(coin);
      //remove from the list
  });
  }).catch(function (error) {
    console.error(error);
  });
}