import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeIndexComponent } from './index.component';

/** Path cho từng route – đổi ở đây để cập nhật nhanh */
export const homePaths = {
  index: 'homepage_index'
} as const;

export const homeRoutes: Route[] = [
  { path: homePaths.index, component: HomeIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
