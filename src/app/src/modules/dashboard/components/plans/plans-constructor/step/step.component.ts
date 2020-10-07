import {Component, Input, OnInit} from '@angular/core';
import {Template} from '../plans-constructor.component';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: Template;

  constructor() { }

  ngOnInit(): void {
  }

}
