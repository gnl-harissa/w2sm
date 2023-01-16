import { Component, OnInit } from '@angular/core';
import {NgForm, ReactiveFormsModule } from '@angular/forms';
import { W2smTabResultLineComponent } from '../w2sm-tab-result-line/w2sm-tab-result-line.component';
import { NexaTokenData } from '../service/token-data.service';
import { DataFormatter } from '../helper/formatter';


@Component({
  selector: 'app-w2sm-tab-result',
  templateUrl: './w2sm-tab-result.component.html',
  styleUrls: ['./w2sm-tab-result.component.scss']
})
export class W2smTabResultComponent implements OnInit {

  public Results : Array<any> = [];
  public HashRateUnits : Array<string> = ["MH/S","GH/S", "KH/S", "TH/S"];
  public CoinTargets : Array<string> = ["NEXA", "RADIANT", "NOVO", "RTM"];
  public HashRates : Array<any> = [];
  public myHashRateUnit : string = "MH/S";
  public selectedCoin : string = "";
  public myHashRate : string = "";
  constructor(private tokenService: NexaTokenData) { }

  ngOnInit(): void {
    this.Results = [

    ];

    this.myHashRateUnit = this.HashRateUnits[0];
    this.selectedCoin = this.CoinTargets[0];
    if (localStorage.getItem("hashrates") != null){
        let StorageVar:string | null = localStorage.getItem("hashrates");
        this.HashRates = JSON.parse(StorageVar == null ? "[]" : StorageVar.toString());
    }
  }

  addHashRate() : void {
    let targetHashRate = parseFloat(this.myHashRate);
    switch (this.myHashRateUnit)
    {
        case "KH/S":
          targetHashRate *= Math.pow(10,3);
        break;
        case "MH/S":
          targetHashRate *= Math.pow(10,6);
          break;
        case "GH/S":
          targetHashRate *= Math.pow(10,9);
          break;
        case "TH/S":
            targetHashRate *= Math.pow(10,12);
        break;
    }
    this.HashRates = this.HashRates.filter( h => h.symbol != this.selectedCoin);
    this.HashRates.push({symbol : this.selectedCoin, hashrate : targetHashRate});
    localStorage.setItem("hashrates", JSON.stringify(this.HashRates));
  }

  updateData() : void {
    this.Results =[];
    this.tokenService.downloadData().then((data:any) => {
      
      data.symbol = "NEXA";

      let curHashrate: number = 0;
      let targetHashRate = this.HashRates.find( h => h.symbol == data.symbol ).hashrate;
      curHashrate = targetHashRate;
      
      data.hashrate = data.Hn;
      data.cpb = data.subsidy;
      data.tpb = data.blockTime;
      data.cpd = data.subsidy * (86400/data.blockTime) * (curHashrate / data.hashrate)* (1 - (data.fee/100));
      data.hashrate = DataFormatter.formatBytes(data.Hn)
      this.Results.push(data);
    });
    this.tokenService.downloadRxdData().then((data:any) => {
      let curHashrate: number = 0
      
      data.symbol = "RADIANT";
      let targetHashRate = this.HashRates.find( h => h.symbol == data.symbol ).hashrate;
      curHashrate = targetHashRate;

      data.hashrate = data.Hn;
      data.cpb = data.subsidy;
      data.tpb = data.blockTime;
      data.cpd = data.subsidy * (86400/data.blockTime) * (curHashrate / data.hashrate) * (1 - (data.fee/100));
      data.hashrate = DataFormatter.formatBytes(data.Hn)

      this.Results.push(data);
    });
    this.tokenService.downloadNovoData().then((data:any) => {
      let curHashrate: number = 0
      
      data.symbol = "NOVO";
      let targetHashRate = this.HashRates.find( h => h.symbol == data.symbol ).hashrate;
      curHashrate = targetHashRate;

      data.hashrate = data.Hn;
      data.cpb = data.subsidy;
      data.tpb = data.blockTime;
      data.cpd = data.subsidy * (86400/data.blockTime) * (curHashrate / data.hashrate) * (1 - (data.fee/100));
      data.hashrate = DataFormatter.formatBytes(data.Hn)
      this.Results.push(data);
    });
    this.tokenService.downloadRtmData().then((data:any) => {
      let curHashrate: number = 0
      
      data.symbol = "RTM";
      let targetHashRate = this.HashRates.find( h => h.symbol == data.symbol ).hashrate;
      curHashrate = targetHashRate;

      data.hashrate = data.Hn;
      data.cpb = data.subsidy;
      data.tpb = data.blockTime;
      data.cpd = data.subsidy * (86400/data.blockTime) * (curHashrate / data.hashrate) * (1 - (data.fee/100));
      data.hashrate = DataFormatter.formatBytes(data.Hn)
      this.Results.push(data);
    });
  }

}
