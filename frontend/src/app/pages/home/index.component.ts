import { Component } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class HomeIndexComponent {
  menuItems = [
    { title: 'Cook from pantry', route: '/pantry', description: 'Nấu từ tủ đồ ăn' },
    { title: 'Dish to recipe', route: '/dish-to-recipe', description: 'Món ăn thành công thức' },
    { title: 'Shopping list', route: '/shopping-list', description: 'Danh sách mua sắm' }
  ];
}
