import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DashboardType} from '../../../../models/dashboard';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus: MenuItem[] = [
    new MenuItem(1, DashboardType.CREATE_EMPLOYEE, 'Новый сотрудник', `/dashboard/${DashboardType.CREATE_EMPLOYEE}`),
    new MenuItem(2, DashboardType.PLANS, 'Планы обучения', `/dashboard/${DashboardType.PLANS}`),
    new MenuItem(3, DashboardType.BILLS, 'Ведомости', `/dashboard/${DashboardType.BILLS}`),
    new MenuItem(4, DashboardType.APPRAISAL, 'Оценка знаний', `/dashboard/${DashboardType.APPRAISAL}`),
    new MenuItem(5, DashboardType.REPORTS, 'Отчеты', `/dashboard/${DashboardType.REPORTS}`),
  ];
  currentMenuItem: DashboardType;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('type')) {
        this.currentMenuItem = (params.get('type') as DashboardType);
      } else {
        this.router.navigate([`/dashboard/${DashboardType.CREATE_EMPLOYEE}`]);
      }
    });
  }

  ngOnInit(): void {
  }
}

class MenuItem {
  public id: number;
  public type: DashboardType;
  public title: string;
  public route: string;

  constructor(id: number, type: DashboardType, title: string, route: string) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.route = route;
  }
}
