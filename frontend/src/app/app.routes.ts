import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { PantryComponent } from './features/pantry/pantry.component';
import { DishToRecipeComponent } from './features/dish-to-recipe/dish-to-recipe.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'pantry', component: PantryComponent },
  { path: 'dish-to-recipe', component: DishToRecipeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
