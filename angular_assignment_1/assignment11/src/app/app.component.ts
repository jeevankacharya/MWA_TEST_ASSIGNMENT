import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter
      counterValue="{{ childCounterValue }}"
      (counterEmitter)="showOutputData($event)"
    ></app-counter>
    <p>Component Counter Value = {{ childCounterValue }}</p>

    <br />
    <app-counter1
      counterValue="{{ childCounterValue2 }}"
      (counterEmitter)="showOutputData2($event)"
    ></app-counter1>

    <p>Component Counter Value = {{ childCounterValue2 }}</p>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'assignment11';
  public childCounterValue = 5;
  public childCounterValue2 = this.childCounterValue;

  showOutputData(outputValue) {
    this.childCounterValue = outputValue;
  }

  showOutputData2(outputValue) {
    this.childCounterValue2 = outputValue;
  }
}
