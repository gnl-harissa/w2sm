import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W2smTabResultComponent } from './w2sm-tab-result/w2sm-tab-result.component';
import { W2smTabResultLineComponent } from './w2sm-tab-result-line/w2sm-tab-result-line.component';
import { NexaTokenData } from './service/token-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIPnRcU3KR1CeuHzMRR04ie-tkASk0tco",
  authDomain: "w2sm-a1f5d.firebaseapp.com",
  projectId: "w2sm-a1f5d",
  storageBucket: "w2sm-a1f5d.appspot.com",
  messagingSenderId: "297352346344",
  appId: "1:297352346344:web:b85bee52d5bd2aac20675d",
  measurementId: "G-RFE9CF66Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
