import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  [x: string]: any;
  email: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient, private toast: NgToastService) {}

  login() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    axios
      .post('http://localhost:8080/client/login', userData)
      .then((response) => {
        const tokenData = response.data;
        const tokenValue = tokenData.split('token: ')[1];
        if (tokenValue) {
          localStorage.setItem('token', tokenValue);
          this.toast.success({
            detail: 'Login sucess',
            summary: 'successfully',
            duration: 5000,
          });
          window.location.href = '/listagem';
        }
      })
      .catch((error) => {
        this.toast.error({
          detail: 'Password or Email incorrect',
          summary: 'fill in correctly',
          duration: 5000,
        });
        console.error('Login error:', error);
      });
  }
}
