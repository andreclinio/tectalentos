import { Router } from '@angular/router';
import { Component,  OnInit,  Input,  Output,  ViewChild} from '@angular/core';
import { FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';

import { UserService } from '../../../shared/services/userservice/user.service';

@Component({
  selector: 'tt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private options: any = {
    showPassword: false,
    remember: true
  }

  private user: any = {
    email: "clinio@tecgraf.puc-rio.br",
    password: "1234"
  }

  constructor(private userService: UserService, private router: Router) {}

  private isOK(control) {
    return control.valid || !control.touched
  }

  ngOnInit() {}

  private login() {
    console.log("login", this.user);
    if (!this.userService.hasUser(this.user.email)) {
      console.log("No user");
      return;
    }
    this.router.navigate(['main/profile-main']);
  }

  private recover(email) {
    console.log("recover", email);
    this.router.navigate(['home/recover'], email );
  }
}
