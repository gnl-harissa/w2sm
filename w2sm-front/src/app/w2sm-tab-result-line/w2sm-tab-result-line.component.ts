import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w2sm-tab-result-line',
  templateUrl: './w2sm-tab-result-line.component.html',
  styleUrls: ['./w2sm-tab-result-line.component.sass']
})
export class W2smTabResultLineComponent implements OnInit {

  @Input()
  dataLine: any = {}

  constructor() { }

  ngOnInit() {
  }

}
