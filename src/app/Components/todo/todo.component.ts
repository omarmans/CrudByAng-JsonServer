import { ToDoService } from './../../Services/to-do.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // استيراد ReactiveFormsModule

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent  implements OnInit{
    ngOnInit(): void {
  this.GetAllToDo()
}
  todo:ToDo[]=[]
  ToDoService=inject(ToDoService)
  taskForm: FormGroup;  // إضافة نموذج التحكم
  isEdit=false
    currentEditTodo: ToDo | null = null;  // تخزين المهمة الحالية عند التعديل

  constructor(private fb: FormBuilder) {
    // إنشاء النموذج
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      taskId: ['', Validators.required],
      isCompleted: [false]
    });
  }






  //get todo from services
  GetAllToDo(){
    this.ToDoService.getToDo().subscribe((data:any)=>{
            this.todo=data
              console.log(this.todo)
             

    })

  }

  CreateOrUpdateToDo() {
    const newTodo: ToDo = {
      id: this.taskForm.value.taskId,
      title: this.taskForm.value.title,
      completed: this.taskForm.value.isCompleted,
    };

    if (this.isEdit && this.currentEditTodo) {
//https://chatgpt.com/share/67022392-d64c-800b-867e-fc8210c1a638 //الشرح 
      this.currentEditTodo = { ...this.currentEditTodo, ...newTodo };  // تحديث بيانات المهمة
      this.ToDoService.UpdateToDo(this.currentEditTodo).subscribe((data: any) => {
        console.log('Task updated');
        this.isEdit = false;  // العودة لوضع الإضافة بعد التحديث
        this.currentEditTodo = null;  // إلغاء المهمة الحالية
        this.taskForm.reset();  
        this.GetAllToDo();  //to be in time ==like Observable 
      });
    } else {
      // إضافة مهمة جديدة
      this.ToDoService.createToDo(newTodo).subscribe((data: any) => {
        console.log('Task added');
        this.todo.push(data);  //to be in time ==like Observable 
        this.taskForm.reset();  
      });
    }
  }

  // تفعيل وضع التعديل وملء النموذج بالقيم الحالية
  editToDo(editTodo: ToDo) {
    this.isEdit = true;  // تفعيل وضع التعديل
    this.currentEditTodo = editTodo;  // حفظ المهمة التي يتم تعديلها

    // ملء النموذج بالقيم الحالية للمهمة
    this.taskForm.setValue({
      title: editTodo.title,
      taskId: editTodo.id,
      isCompleted: editTodo.completed
    });
  }
  
  
              
              deleteTodo(id: string) {
    this.ToDoService.DeleteToDo(id).subscribe(() => {
      this.todo = this.todo.filter(task => task.id !== id); // تحديث القائمة
    });
  }
  
  onSubmit() {
    this.CreateOrUpdateToDo(); //ليه حطنهاه هنا
  }
}