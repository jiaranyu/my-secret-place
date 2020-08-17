import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './Pages/login/login.component';
import {WelcomeComponent} from './Pages/welcome/welcome.component';
import {ErrorComponent} from './Pages/error/error.component';
import {TodoListComponent} from './Pages/todo-list/todo-list.component';
import {LogoutComponent} from './Pages/logout/logout.component';
import {RouteGuardService} from './Services/routeGuard/route-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todo-list', component: TodoListComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
