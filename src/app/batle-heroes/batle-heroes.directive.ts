import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector:'[animate]'
})
export class Animate {
    @Input() x: number;
    @Input() y: number;
    @Input() time: number;
    constructor(private element: ElementRef) {
    }

    @HostListener('click') onClick() {
        this.changeState();
    }

    private changeState(): void {
        console.log(this.x, this.y, this.time);
        this.element.nativeElement.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.element.nativeElement.style.transition = `all ${this.time}s ease-in-out`;
    }
}