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
    float:number = 0.42

    obj = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: 3,
                f: 4
            }
        }
    }
}

