import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeatilsComponent } from './todo-deatils.component';

describe('TodoDeatilsComponent', () => {
  let component: TodoDeatilsComponent;
  let fixture: ComponentFixture<TodoDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
