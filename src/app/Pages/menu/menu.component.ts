import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isUserLoggedIn = false;
  constructor(private as: AuthService) {
  }

  ngOnInit(): void {
    this.as.status.subscribe(res => {
      this.isUserLoggedIn = res;
    });
  }

  // public getLoginStatus(): boolean {
  //   return this.as.isUserLoggedIn();
  // }

}
