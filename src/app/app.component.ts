import {Component, OnInit} from '@angular/core';
import {AppCounterService} from './app-counter.services.ts/AppCounterService';
import {LocalCounterService} from './services/local-counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [LocalCounterService]
})

export class AppComponent {
    constructor(
        public appCounterService: AppCounterService,
        public localCounterService: LocalCounterService
    ) {}
}

