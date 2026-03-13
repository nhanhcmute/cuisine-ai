import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<p>Login page (placeholder)</p><a routerLink="/register">Register</a>`,
  styles: []
})
export class LoginComponent {}
