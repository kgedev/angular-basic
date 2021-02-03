import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

    arr = [1, 1, 3, 5, 8, 13]

    objs = [
        {title: 'Post1', author: "Vladilen", comments: [
                {name: 'max', text: 'lorem 1'},
                {name: 'max', text: 'lorem 2'},
                {name: 'max', text: 'lorem 3'}
            ]
        },
        {title: 'Post2', author: "Indrew", comments: [
                {name: 'jack', text: 'lorem 1'},
                {name: 'jack ', text: 'lorem 2'},
                {name: 'jack', text: 'lorem 3'}
            ]
        }
    ]

}

