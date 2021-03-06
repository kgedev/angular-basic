import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
    completed: boolean
    title: string
    id?: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    url = 'https://jsonplaceholder.typicode.com/todos'
    todos: Todo[] = []
    todoTitle = ''
    loading = false

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchTodos()
    }

    fetchTodos() {
        this.loading = true

        this.http.get<Todo[]>(this.url + '?_limit=2')
            .pipe(delay(1500))
            .subscribe(todos => {
                console.log('Response: ',todos)
                this.todos = todos

                this.loading = false
            })
    }

    addTodo() {
        if(!this.todoTitle.trim()) {
            return
        }

        const newTodo: Todo = {
            title: this.todoTitle,
            completed: false
        }

        this.http.post<Todo>(this.url, newTodo)
            .subscribe(todo => {
                console.log('todo: ', todo)
                this.todos.push(todo)
                this.todoTitle = ''
            })
    }

}


















