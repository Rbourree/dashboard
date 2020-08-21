import { Component } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';


@Component({
  templateUrl: 'pages.html',
  styleUrls: ['pages.scss'],
  selector: 'page'
})
export class PagesComponent {
  constructor(private usersService: UsersService, private router: Router) { }

  logout(){
    this.usersService.logout().subscribe(
      () => {
        localStorage.removeItem('token');
        return this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error)
      }) 
  }
}
