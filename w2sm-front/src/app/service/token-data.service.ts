import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NexaTokenData implements TokenDataProcess
{
  TokenType: string = "NEXA";
  UrlExplorer: string = "http://localhost:8080/api/Nexa";

  constructor(private http: HttpClient)
  {

  }

  downloadDataToken(token: string): any {
    return this.http.get("/api/"+token, {responseType: 'json'}).toPromise();
  }

  downloadData(): any {
    return this.http.get("/api/Nexa2", {responseType: 'json'}).toPromise();
  }

  downloadRxdData(): any {
    return this.http.get("/api/Rxd2", {responseType: 'json'}).toPromise();
  }

  downloadNovoData(): any {
    return this.http.get("/api/Novo", {responseType: 'json'}).toPromise();
  }

  downloadRtmData(): any {
    return this.http.get("/api/Rtm", {responseType: 'json'}).toPromise();
  }

}

export interface TokenDataProcess
{
  TokenType : string
  UrlExplorer : string
  
  downloadData() : any
}