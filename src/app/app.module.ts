import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './ui/shared.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent, TasksComponent, TaskComponent, NewTaskComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule]
})
export class AppModule { }