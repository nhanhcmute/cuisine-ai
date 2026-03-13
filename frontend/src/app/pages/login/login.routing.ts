import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginIndexComponent } from './index.component';

/** Path cho từng route – đổi ở đây để cập nhật nhanh */
export const loginPaths = {
  index: 'sign-in'
} as const;

export const loginRoutes: Route[] = [
  { path: loginPaths.index, component: LoginIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
