import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DashboardType} from '../../../../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardType = DashboardType;
  currentDashboard: DashboardType;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('type')) {
        this.currentDashboard = (params.get('type') as DashboardType);
      }
    });
  }

  ngOnInit(): void {
  }
}
