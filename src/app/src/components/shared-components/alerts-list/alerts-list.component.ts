import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {Alert} from '../../../models/alert';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.scss']
})
export class AlertsListComponent {

  constructor(private alertService: AlertService) {
  }

  getAlerts(): Alert[] {
    return this.alertService.getAlerts().reverse();
  }
}
