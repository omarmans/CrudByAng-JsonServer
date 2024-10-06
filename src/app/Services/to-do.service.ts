import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
private apiUrl="http://localhost:3000/todo"
  http=inject(HttpClient) //new   


 
   getToDo(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }
  createToDo(todo:ToDo): Observable<ToDo> {
// return this.http.post<ToDo>(this.apiUrl,JSON.stringify(todo))
return this.http.post<ToDo>(this.apiUrl,todo)
  }

  getToDoById(id:string):Observable<ToDo>{
    return this.http.get<ToDo>(`${this.apiUrl}/${id}`)
  }


  UpdateToDo(todo:ToDo):Observable<ToDo>{
return this.http.put<ToDo>(`${this.apiUrl}/${todo.id}`,todo)
// return this.http.put<ToDo>(`${this.apiUrl}`,todo)
  }


    DeleteToDo(todoid:string):Observable<void>{
     return this.http.delete<void>(`${this.apiUrl}/${todoid}`)
    }
}