import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter1',
  template: `
    <button (click)="decrease()">-</button>
    <input [value]="counterValue" />
    <button (click)="increase()">+</button>
  `,
  styles: [`button { padding: 6px; } input {   padding: 5px;   text-align: center; }`]
})
export class Counter1Component  {

  @Input() counterValue;

  @Output() counterEmitter = new EventEmitter();

  increase() {
    this.counterValue++;
    this.emitCounter();
  }

  decrease() {
    this.counterValue--;
    this.emitCounter();
  }

  emitCounter() {
    this.counterEmitter.emit(this.counterValue);
  }

}
