import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: '',
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.authService.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res), localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      },
      (error) => console.log(error)
    );
  }
}
