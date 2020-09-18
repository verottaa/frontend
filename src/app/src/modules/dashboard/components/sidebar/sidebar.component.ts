import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menus: MenuItem[] = [];
  @Input() currentItem: MenuItem;
  @Output() currentItemChange = new EventEmitter<MenuItem>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onItemClick(item): void {
    this.currentItemChange.emit(item);
  }

}

export class MenuItem {
  public id: number;
  public dataFeather: string;
  public title: string;
  public href: string;

  constructor(id: number, feather: string, title: string, href: string) {
    this.id = id;
    this.dataFeather = feather;
    this.title = title;
    this.href = href;
  }
}
