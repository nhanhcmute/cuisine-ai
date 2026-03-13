import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/recipes" routerLinkActive="active">Recipes</a>
      <a routerLink="/pantry" routerLinkActive="active">Pantry</a>
      <a routerLink="/dish-to-recipe" routerLinkActive="active">Dish</a>
      <a routerLink="/shopping-list" routerLinkActive="active">ShoppingList</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/register" routerLinkActive="active">Register</a>
    </nav>
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #eee;
      border-bottom: 1px solid #ccc;
    }
    .navbar a {
      text-decoration: none;
      color: #333;
    }
    .navbar a.active {
      font-weight: bold;
      color: #1976d2;
    }
    .main {
      padding: 1rem;
    }
  `]
})
export class AppComponent {}
