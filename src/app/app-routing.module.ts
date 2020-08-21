import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard} from "../services/auth-guard.service";
import { PagesComponent } from './pages/pages';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';


const routes: Routes = [
  { path: 'login', component: LoginPage },
  {
    path: '', component: PagesComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomePage },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
