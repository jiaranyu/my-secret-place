import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit(): void {
    this.as.logout();
  }

}
