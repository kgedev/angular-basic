import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from './todos.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    todos: Todo[] = []
    todoTitle = ''
    loading = false

    constructor(private todosService: TodosService) {}

    ngOnInit() {
        this.fetchTodos()
    }

    fetchTodos() {
        this.loading = true
        this.todosService.fetchTodos()
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

        this.todosService.addTodo(newTodo)
            .subscribe(todo => {
                console.log('todo: ', todo)
                this.todos.push(todo)
                this.todoTitle = ''
            })
    }

    removeTodo(id: number) {
        this.todosService.removeTodo(id)
            .subscribe(() => {
                this.todos = this.todos.filter(t => t.id != id)
            })
    }

    completeTodo(id: number) {
        this.todosService.completeTodo(id)
            .subscribe(todo => {
                this.todos.find(t => t.id === todo.id).completed = true
                console.log(todo)
            })
    }
}



















