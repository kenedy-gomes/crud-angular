import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

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

  constructor(private http: HttpClient, private toast: NgToastService) {}

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
          this.toast.success({
            detail: 'Register Sucess',
            summary: 'Registration done successfully!',
            duration: 5000,
          });
          console.log(response);
          window.location.href = '/';
        }
      })
      .catch((error) => {
        this.toast.error({
          detail: 'Error Register',
          summary: error,
          duration: 5000,
        });
        // Aqui você pode lidar com erros de registro e exibir mensagens de erro ao usuário
      });
  }
}
