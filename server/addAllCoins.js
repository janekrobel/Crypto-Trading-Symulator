const { request } = require('express');
const coinController = require('./controllers/coinController');

const axios = require("axios");

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

axios.request(options).then(function (response) {
	coins = response.coins;
}).catch(function (error) {
	console.error(error);
});


coins.forEach((_coin)=>{
    let coin = {
        "uuid" : _coin.uuid,
        "symbol" : _coin.symbol,
        "name" : _coin.name,
        "price" : _coin.price,
        "price" : _coin.marketCap,
        "volume" : _coin["24hVolume"],
        "change" : _coin.change,
    }

    coinController.createCoin(coin);
});

//test out;