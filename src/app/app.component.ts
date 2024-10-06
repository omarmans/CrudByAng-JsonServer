import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ToDoService } from './Services/to-do.service';
import { ToDo } from './Models/to-do';
import { TodoComponent } from "./Components/todo/todo.component";
import { OtpComponent } from "./otp/otp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TodoComponent, OtpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'CRUD';


  ngOnInit(): void {

  }

  
}
