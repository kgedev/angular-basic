import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppCounterService} from './app-counter.services.ts/AppCounterService';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        AppCounterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
