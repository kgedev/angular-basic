import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
    @Input() post: Post;
    @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
    @ContentChild('info', {static: true}) infoRef: ElementRef

    constructor() {}

    removePost() {
        this.onRemove.emit(this.post.id)
    }

    ngOnInit(): void {
        // console.log(this.infoRef.nativeElement)
        console.log('ngOnInit')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes)
    }

    ngDoCheck(): void {
        console.log('ngDoCheck')
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit')
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked')
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit')
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked')
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy')
    }

}
