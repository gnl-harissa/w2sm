const csvwriter = require('csv-writer')

const express = require('express')
const cors = require('cors')
//const subs = require('./db/subs.json')
const app = express()
const fs = require('fs');
var nodemailer = require('nodemailer');
const axios = require('axios');

app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log('Serveur à l\'écoute');       
  });

app.get('/api/Nexa', async (req,res) => {
  let blockTime = 120

  let response = await axios.get("https://pool.rplant.xyz/api/dash?t="+new Date().getTime());
  let subsidy = response.data.tbs.nexa.r ;
  let NetworkHashRate = response.data.tbs.nexa.hrN;
  let fee = 0;
  try 
  { 
    fee = parseFloat(response.data.tbs.nexa.info.fee.replace("%", ""));
  }catch(e)
  {

  }

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Rxd', async (req,res) => {
  let blockTime = 300

  let response = await axios.get("https://pool.rplant.xyz/api/dash?t="+new Date().getTime());
  let subsidy = response.data.tbs.radiant.r ;
  let NetworkHashRate = response.data.tbs.radiant.hrN;
  let fee = parseFloat(response.data.tbs.radiant.info.fee.replace("%", ""));

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Rtm', async (req,res) => {
  let blockTime = 120

  let response = await axios.get("https://pool.rplant.xyz/api/dash?t="+new Date().getTime());
  let subsidy = response.data.tbs.raptoreum.r ;
  let NetworkHashRate = response.data.tbs.raptoreum.hrN;
  let fee = parseFloat(response.data.tbs.raptoreum.info.fee.replace("%", ""));

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Novo', async (req,res) => {
  let blockTime = 150

  let response = await axios.get("https://novopool.net/v1/pool/global-stats?t="+new Date().getTime());
  let subsidy = 2000000;
  let NetworkHashRate = response.data.data.hashrate;
  let fee = 4;

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Ergo', async (req,res) => {
  let blockTime = 150

  let response = await axios.get("https://api.ergoplatform.com/info?t="+new Date().getTime());
  let subsidy = 42;
  let NetworkHashRate = response.data.hashRate;
  let fee = 1;

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Kaspa', async (req,res) => {
  let blockTime = 1

  let response = await axios.get("https://api.woolypooly.com/api/kas-1/stats?simple=false&t="+new Date().getTime());
  let subsidy = response.data.blockReward;
  let NetworkHashRate = response.data.netHashrate;
  let fee = response.data.fee;

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Flux', async (req,res) => {


  let response = await axios.get("https://api-flux.fluxpools.net/api/config?t="+new Date().getTime());
  let blockTime = response.data.coin.coinInfo.blockTime;
  let subsidy = response.data.coin.coinInfo.blockReward;

  let fee = response.data.fee;
  response = await axios.get("https://api-flux.fluxpools.net/api/dashboard?t="+new Date().getTime());
  let NetworkHashRate = response.data.poolStats.networkSols;

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});


