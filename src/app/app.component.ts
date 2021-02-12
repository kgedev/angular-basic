import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
    title = 'angular-basics'
    e: number = Math.E
    str = 'HeLlO wOrlD'
    date: Date = new Date()

}

