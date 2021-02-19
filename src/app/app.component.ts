import {Component, OnInit} from '@angular/core';
import {AppCounterService} from './app-counter.services.ts/AppCounterService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(public appCounterService: AppCounterService) {
    }
}

