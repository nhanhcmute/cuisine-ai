import { Routes } from '@angular/router';
import { RegisterComponent } from './features/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { PantryComponent } from './features/pantry/pantry.component';
import { DishToRecipeComponent } from './features/dish-to-recipe/dish-to-recipe.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'sign-in', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'pantry', component: PantryComponent },
  { path: 'dish-to-recipe', component: DishToRecipeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/dashboard' }
];
