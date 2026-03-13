import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing';
import { HomeIndexComponent } from './index.component';

@NgModule({
  declarations: [HomeIndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
