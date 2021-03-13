import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

export interface Todo {
    completed: boolean
    title: string
    id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
    private url = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient) {
    }

    addTodo(todo: Todo): Observable<Todo> {
        const headers = new HttpHeaders({
            'MyCustomHeader': Math.random().toString(),
            'OnlyStringValue': '12345'
        })

        return this.http.post<Todo>(this.url, todo, {headers});
    }

    fetchTodos(): Observable<Todo[]> {
        let params = new HttpParams()
        params = params.append('_limit', '4')
        params = params.append('custom', 'anything')

        return this.http.get<Todo[]>(this.url, {
            params,
            observe: 'response'
        })
            .pipe(
                map(response => {
                   // console.log('Response', response)
                    return response.body
                }),
                delay(500),
                catchError(error => {
                    console.log('Error: ', error.message)
                    return throwError(error)
                })
            )
    }

    removeTodo(id: number): Observable<any> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            observe: 'events'
        }).pipe(
            tap(event => {
                if(event.type === HttpEventType.Sent) {
                    console.log('sent', event)
                }
                if (event.type === HttpEventType.Response) {
                    console.log('response', event)
                }
            })
        )
    }

    completeTodo(id: number): Observable<Todo> {
        return this.http.put<Todo>(`${this.url}/${id}`, {
            completed: true
        })
    }
}
