import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoDeatilsComponent } from './Components/todo-deatils/todo-deatils.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
      {path:'' ,redirectTo:"/todo",pathMatch:'full'},
      {path:"home",component:HomeComponent,title:"Home"},
      {path:"todo",component:TodoComponent,title:"todo"},
      {path:"todo/:id",component:TodoDeatilsComponent,title:"todoDeatails"},
      {path:"contactUs",component:ContactUsComponent,title:"ContactUS"},
      {path:"AboutUs",component:AboutusComponent,title:"AboutUs"},
      {path:"**",component:NotFoundComponent,title:"notFound"},
   
];
