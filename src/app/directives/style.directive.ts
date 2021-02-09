import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    constructor(private el: ElementRef, private r: Renderer2) {

    }

    @HostListener('click', ['$event.target']) onClick(evetn: Event) {
        console.log(evetn)
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', 'blue')
        this.r.setStyle(this.el.nativeElement, 'cursor', 'pointer')
    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null)
        this.r.setStyle(this.el.nativeElement, 'cursor', null)
    }
}

