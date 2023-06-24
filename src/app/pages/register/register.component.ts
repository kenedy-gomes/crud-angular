import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  [x: string]: any;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  date: string | undefined;

  constructor(private http: HttpClient) {}

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      date: this.date,
    };

    axios
      .post('http://localhost:8080/client', userData)
      .then((response) => {
        if (this.name && this.email && this.password && this.date) {
          alert('Cadastro realizado com sucesso');
          console.log(response);
          window.location.href = '/';
        }
      })
      .catch((error) => {
        alert('Preencha os campos corretamente');
        console.error('Registration error:', error);
        // Aqui você pode lidar com erros de registro e exibir mensagens de erro ao usuário
      });
  }
}
