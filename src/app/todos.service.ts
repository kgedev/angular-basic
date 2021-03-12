import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

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
        return this.http.get<Todo[]>(this.url + '9?_limit=2')
            .pipe(
                delay(500),
                catchError(error => {
                    console.log('Error: ', error.message)
                    return throwError(error)
                })

            )
    }

    removeTodo(id: number): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }

    completeTodo(id: number): Observable<Todo> {
        return this.http.put<Todo>(`${this.url}/${id}`, {
            completed: true
        })
    }
}
