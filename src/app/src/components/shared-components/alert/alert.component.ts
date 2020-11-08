import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Alert} from '../../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alert: Alert;

  constructor() {
  }

  ngOnInit(): void {
  }

}
