import { Component } from '@angular/core';

export interface Post {
    title: string
    text: string
    id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'angular-basics'

    posts: Post[] = [
        {title: 'I want to learn Angular components', text: 'I\'m steal learning components', id: 1},
        {title: 'Next block', text: 'Directives & Pipes', id: 2},
    ]

}

