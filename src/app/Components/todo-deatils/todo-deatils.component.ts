import { Component, inject, OnInit } from '@angular/core';
import { ToDoService } from '../../Services/to-do.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../Models/to-do';

@Component({
  selector: 'app-todo-deatils',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './todo-deatils.component.html',
  styleUrl: './todo-deatils.component.scss'
})
export class TodoDeatilsComponent implements OnInit {
  todo!:ToDo
  todoServices=inject(ToDoService)
  route=inject(ActivatedRoute)
  router=inject(Router)
  ngOnInit(): void {
this.getToDo()  }


 getToDo() {
  const id = String(this.route.snapshot.paramMap.get("id"));
  this.todoServices.getToDoById(id).subscribe(
    (todo: any) => {
      this.todo = todo;
    },
    (error) => {
      console.error('Error fetching ToDo:', error);
    }
  );
}
}