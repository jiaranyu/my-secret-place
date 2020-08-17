import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './Pages/error/error.component';
import { TodoListComponent } from './Pages/todo-list/todo-list.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { LogoutComponent } from './Pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    TodoListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
