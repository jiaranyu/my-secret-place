import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../Services/auth/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessage = 'welcome, ';
  username: string;

  constructor(private route: ActivatedRoute, private as: AuthService) {
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
  }

}
