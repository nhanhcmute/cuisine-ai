import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<p>Register page (placeholder)</p><a routerLink="/login">Login</a>`,
  styles: []
})
export class RegisterComponent {}
