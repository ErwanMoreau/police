import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly Auth: AuthService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#Email').value;
    const password = target.querySelector('#Password').value;
    this.Auth.getUserDetails(email, password)
      .subscribe(data => {

        if (data.success) {
          this.router.navigate(['']);
          this.Auth.setLoggedIn(true);
        } else {
          window.alert(data.message);
        }
      });
    console.log(email, password);
  }

}
