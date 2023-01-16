const csvwriter = require('csv-writer')

const express = require('express')
const cors = require('cors')
//const subs = require('./db/subs.json')
const app = express()
const fs = require('fs');
var nodemailer = require('nodemailer');
const axios = require('axios');

const path = require('path');
const { match } = require('assert');

var transporter = nodemailer.createTransport({
  host: "smtp.orange.fr",
  port: 465,
  auth: {
    user: 'marwan.benrajeb@orange.fr',
    pass: 'Orange82212.'
  },
  secure: true // upgrade later with STARTTLS
});

var mailOptions = {
  from: 'marwan.benrajeb@orange.fr',
  to: 'kamui94@gmail.com',
  subject: 'Sending Email using Node.js'
};

app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log('Serveur à l\'écoute');       
  });

app.get('/api/Nexa', async (req,res) => {
   let blockTime = 120
   let subsidy = 10000000

   let response = await axios.get("https://explorer.nexa.org/");
   let regexpTestAgainst = /Chain Work<\/span><\/th><td class="text-right text-monospace"><span class="border-dotted" data-toggle="tooltip" title="hex: (.)+"><span>([0-9]*[.]?[0-9]+)<\/span>/ ///Chain Work(.)+><span>([0-9]*[.]?[0-9]+)<\/span>/
   let matchResult = response.data.match(regexpTestAgainst);
   let NetworkHashRate = parseFloat(matchResult[2]) * 1* Math.pow(10,12);

   res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime});
});

app.get('/api/Nexa2', async (req,res) => {
  let blockTime = 120

  let response = await axios.get("https://pool.rplant.xyz/api/dash");
  let subsidy = response.data.tbs.nexa.r ;
  let NetworkHashRate = response.data.tbs.nexa.hrN;
  let fee = response.data.tbs.nexa.info.fee;

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Rxd2', async (req,res) => {
  let blockTime = 300

  let response = await axios.get("https://pool.rplant.xyz/api/dash");
  let subsidy = response.data.tbs.radiant.r ;
  let NetworkHashRate = response.data.tbs.radiant.hrN;
  let fee = parseFloat(response.data.tbs.radiant.info.fee.replace("%", ""));

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Rtm', async (req,res) => {
  let blockTime = 120

  let response = await axios.get("https://pool.rplant.xyz/api/dash");
  let subsidy = response.data.tbs.raptoreum.r ;
  let NetworkHashRate = response.data.tbs.raptoreum.hrN;
  let fee = parseFloat(response.data.tbs.raptoreum.info.fee.replace("%", ""));

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Novo', async (req,res) => {
  let blockTime = 150

  let response = await axios.get("https://novopool.net/v1/pool/global-stats");
  let subsidy = 2000000;
  let NetworkHashRate = response.data.data.hashrate;
  let fee = 4;

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime, fee:fee});
});

app.get('/api/Rxd', async (req,res) => {
  let blockTime = 300
  let subsidy = 50000

  let response = await axios.get("https://radiantexplorer.com/ext/getsummary/");

  let NetworkHashRate = parseFloat(response.data.hashrate) * 1* Math.pow(10,9);

  res.json({Hn :NetworkHashRate, subsidy: subsidy, blockTime:blockTime});
});


