import {Component} from '@angular/core';

export interface Post {
    title: string
    text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

    search = ''
    searchField = 'title'

    posts: Post[] = [
        {title: 'Beer', text: 'The best beer in the world'},
        {title: 'Bread', text: 'The best bread in the world'},
        {title: 'TypeScript', text: 'The best language in the world'},
    ]
}

