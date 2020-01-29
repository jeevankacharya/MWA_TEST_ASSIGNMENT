import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appMakebigger]'
})
export class MakebiggerDirective {
  font = 20;
  @HostListener('dblclick') biggertext() {
    this.font = this.font + 2;
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.font + 'px');
  }

  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.font + 'px');

  }

}
