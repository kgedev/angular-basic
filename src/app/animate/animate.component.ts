import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceInLeft, bounceOutLeft, bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <div [@bounce] class="rect" *ngIf="visible"></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounceInLeft)),
      transition('* => void', useAnimation(bounceOutLeft, {
        params: {
          timing: 1,
          delay: .3
        }
      }))
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true

  constructor() { }

  ngOnInit(): void {
  }

}
