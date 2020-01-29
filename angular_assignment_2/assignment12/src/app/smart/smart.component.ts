import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  smartdata = [1, 2, 3, 4, 5, 6, 7];
  @Output() eventEmitter = new EventEmitter();

  constructor() {}
  ngOnInit() {
    this.eventEmitter.emit(this.smartdata);
  }
}
