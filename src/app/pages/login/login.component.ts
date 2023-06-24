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
        if (!this.email && !this.password) {
          alert('Preencha os campos corretamente');
          console.log(response);
        }
      })
      .catch((error) => {
        alert('Email e/ou senha inválidos');
        console.error('Login error:', error);
        // Aqui você pode lidar com erros de registro e exibir mensagens de erro ao usuário
      });
  }
}
