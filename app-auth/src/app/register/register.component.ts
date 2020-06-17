import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.authService.registerUser(this.registerUserData).subscribe(
      // details of registered user; res returned as observale we need to subciribe to
      (res) => {
        console.log(res), localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      },
      (error) => console.log(error)
    );
  }
}
