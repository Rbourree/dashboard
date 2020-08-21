
import { Component } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private usersService: UsersService, private router: Router) { }


}