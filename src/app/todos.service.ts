import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface Todo {
    completed: boolean
    title: string
    id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
    private url = 'https://jsonplaceholder.typicode.com/todos'

    constructor(private http: HttpClient) {}

    addTodo(todo: Todo): Observable<Todo> {
         return this.http.post<Todo>(this.url, todo)
    }

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.url + '?_limit=2')
            .pipe(delay(500))
    }

    removeTodo(id: number): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
}
