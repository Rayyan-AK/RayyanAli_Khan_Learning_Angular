import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]'
})
export class HighlightOnFocusDirective {

  @Input('appHighlightOnFocus') highlightColor: string = 'yellow';

  private originalBackground: string | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.originalBackground = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.backgroundColor = this.originalBackground;
  }

}
