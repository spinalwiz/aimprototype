import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
let Auth0Lock = require('auth0-lock').default;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Create new lock object to ensure ID actually exists.
  options = {
    container: 'login-container'
  };

  lock = new Auth0Lock('YNBFHMd7KYaPBCDoH5fQfVmbEi4WUSTW', 'aimtrain.eu.auth0.com', this.options);

  constructor(private auth:AuthService, private router: Router) {
  }

  ngOnInit() {
    if (!this.auth.authenticated()) {
      this.login();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  private login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

}
