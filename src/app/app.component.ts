import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
// import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Aim Train';

  constructor(private auth: AuthService, private router:Router) {
    if(!auth.authenticated()) {
      router.navigate(['/login']);
    }
  }
}
