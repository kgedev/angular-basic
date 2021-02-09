import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue'
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

    constructor(private el: ElementRef, private r: Renderer2) {

    }

    @HostListener('click', ['$event.target']) onClick(evetn: Event) {
        console.log(evetn)
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', this.color)
        this.r.setStyle(this.el.nativeElement, 'font-weight', this.dStyles.fontWeight)
        this.r.setStyle(this.el.nativeElement, 'border-radius', this.dStyles.borderRadius)
        this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
        this.r.setStyle(this.el.nativeElement, 'cursor', 'pointer')
    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null)
        this.r.setStyle(this.el.nativeElement, 'font-weight', null)
        this.r.setStyle(this.el.nativeElement, 'border-radius', null)
        this.r.setStyle(this.el.nativeElement, 'border', null)
        this.r.setStyle(this.el.nativeElement, 'cursor', null)
    }
}

