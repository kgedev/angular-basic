import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue'
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

    @HostBinding('style.color') elColor = null

    constructor(private el: ElementRef, private r: Renderer2) {

    }

    @HostListener('click', ['$event.target']) onClick(evetn: Event) {
        console.log(evetn)
    }

    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color
        // this.r.setStyle(this.el.nativeElement, 'color', this.color)
        // this.r.setStyle(this.el.nativeElement, 'cursor', 'pointer')
        // this.r.setStyle(this.el.nativeElement, 'font-weight', this.dStyles.fontWeight)
        // this.r.setStyle(this.el.nativeElement, 'border-radius', this.dStyles.borderRadius)
        // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = null
        // this.r.setStyle(this.el.nativeElement, 'color', null)
        // this.r.setStyle(this.el.nativeElement, 'cursor', null)
        // this.r.setStyle(this.el.nativeElement, 'font-weight', null)
        // this.r.setStyle(this.el.nativeElement, 'border-radius', null)
        // this.r.setStyle(this.el.nativeElement, 'border', null)
    }
}

