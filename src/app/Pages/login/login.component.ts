import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../Services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private as: AuthService) {
  }

  ngOnInit(): void {
  }


  public handleLogin(): void {
    if (this.as.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);

    } else {
      this.invalidLogin = true;
    }
  }
}
