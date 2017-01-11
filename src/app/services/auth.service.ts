import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';

let Auth0Lock = require('auth0-lock').default;

// Avoid name not found warnings
// declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  // Configure Auth0
  options = {
    // container: 'login-container',
    // auth: {
    //   redirectUrl: 'http://localhost:4200'
    // }
  };

  lock = new Auth0Lock('YNBFHMd7KYaPBCDoH5fQfVmbEi4WUSTW', 'aimtrain.eu.auth0.com', this.options);

  // Store profile object in auth class
  userProfile: any; // changed from Object as was creating typescript errors

  constructor(private router: Router) {

    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    this.lock.on('authenticated', (authResult) => {

      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;

        // Redirect to the saved URL, if present.
        // let redirectUrl: string = localStorage.getItem('redirect_url');
        // console.log("redirect: " + redirectUrl);
        // if (redirectUrl !== undefined) {
        //   this.router.navigate([redirectUrl]);
        //   localStorage.removeItem('redirect_url');
        // }

        //Always redirect for now
        this.router.navigate(['/dashboard']);
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    this.router.navigate(['/']);
  };

  public isAdmin() {
    return this.userProfile && this.userProfile.app_metadata
      && this.userProfile.app_metadata.roles
      && this.userProfile.app_metadata.roles.indexOf('admin') > -1;
  }

}
