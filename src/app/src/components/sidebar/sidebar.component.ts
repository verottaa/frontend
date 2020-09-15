import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus: MenuItem[] = [
    new MenuItem(1, 'home', 'Новый сотрудник'),
    new MenuItem(2, 'file', 'Планы обучения'),
    new MenuItem(3, 'shopping-cart', 'Ведомости'),
    new MenuItem(4, 'users', 'Оценка знаний'),
    new MenuItem(5, 'bar-chart-2', 'Отчеты'),
  ];

  currentMenuItem: MenuItem = this.menus[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemClick(item): void {
    this.currentMenuItem = item;
  }

}

class MenuItem {
  public id: number;
  public dataFeather: string;
  public title: string;

  constructor(id: number, feather: string, title: string) {
    this.id = id;
    this.dataFeather = feather;
    this.title = title;
  }
}
