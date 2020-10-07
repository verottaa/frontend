import {Component, Input, OnInit} from '@angular/core';

export interface Template {
  task: string;
  formLearn: string;
  doPeriod: string;
  dateStart: string;
  dateEnd: string;
  mentor: string;
  materials: string;
}

@Component({
  selector: 'app-plans-constructor',
  templateUrl: './plans-constructor.component.html',
  styleUrls: ['./plans-constructor.component.scss']
})

export class PlansConstructorComponent implements OnInit {

  steps: Template[] = [
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  updateTemplate(step: Template) {
    this.steps.push(step);
  }

}
