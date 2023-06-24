import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  [x: string]: any;

  email: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient) {}

  login() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    axios
      .post('http://localhost:8080/client/login', userData)
      .then((response) => {
        const tokenData = response.data; // Obtém a string completa do campo "data"
        const tokenValue = tokenData.split('token: ')[1];

        if (tokenValue) {
          localStorage.setItem('token', tokenValue);
          window.location.href = '/listagem';
        } else {
          console.error('Token não retornado pelo backend');
        }
      })
      .catch((error) => {
        alert('Preencha os campos corretamente');
        console.error('Login error:', error);
      });
  }
}
