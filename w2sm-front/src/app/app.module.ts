import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W2smTabResultComponent } from './w2sm-tab-result/w2sm-tab-result.component';
import { W2smTabResultLineComponent } from './w2sm-tab-result-line/w2sm-tab-result-line.component';
import { NexaTokenData } from './service/token-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    W2smTabResultComponent,
    W2smTabResultLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NexaTokenData],
  bootstrap: [AppComponent]
})
export class AppModule { }
