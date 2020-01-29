import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `<app-smart (eventEmitter)="arrayEvent($event)"></app-smart>

  <ul appMakebigger appIsvisible [myVisibility]="true">
   <li  *ngFor= "let data of (smartdata |multi:3 )"  class="pointer" >{{ data }} </li>
 </ul>
`,
  styles: [`.pointer {cursor: pointer;}`]
})
export class DumbComponent implements OnInit {
  smartdata = [];
  constructor() {}

  ngOnInit() {}

  arrayEvent(data) {
    this.smartdata = data;
  }
}
