// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[usehero]'
// })
// export class HighlightDirective {

//   constructor(private el: ElementRef) { }

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight(this.highlightColor || 'red');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(null);
//   }

//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }