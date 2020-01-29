import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appIsvisible]'
})
export class IsvisibleDirective {
  @Input() myVisibility: boolean;

  @HostBinding('style.display') visible;

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    if (this.myVisibility === false) {
      this.visible = 'none';
    } else {
      this.visible = 'block';
    }
  }
}
