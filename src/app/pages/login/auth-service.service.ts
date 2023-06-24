import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    // Verifique a presença de um token no LocalStorage ou em outra fonte
    const token = localStorage.getItem('token');
    return !!token;
  }
}
