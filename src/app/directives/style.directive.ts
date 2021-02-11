import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue'
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

    @HostBinding('style.color') elColor = null

    constructor(private el: ElementRef, private r: Renderer2) {}

    @HostListener('click', ['$event.target']) onClick(evetn: Event) {
        console.log(evetn)
    }

    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = null
    }
}

