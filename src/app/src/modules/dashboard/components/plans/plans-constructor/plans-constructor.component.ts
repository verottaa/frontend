import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-plans-constructor',
  templateUrl: './plans-constructor.component.html',
  styleUrls: ['./plans-constructor.component.scss']
})
export class PlansConstructorComponent implements OnInit {

  templateStep: Template[] = [
    {
      task: 'Документация',
      formLearn: 'Самостоятельное изучение',
      doPeriod: '1 день',
      dateStart: '01.01.2020',
      dateEnd: '02.02.2020',
      mentor: 'Нижний Новгород',
      materials: 'http://link'
    },
    {
      task: 'Документация',
      formLearn: 'Самостоятельное изучение',
      doPeriod: '1 день',
      dateStart: '01.01.2020',
      dateEnd: '02.02.2020',
      mentor: 'Нижний Новгород',
      materials: 'http://link'
    },
    {
      task: 'Документация',
      formLearn: 'Самостоятельное изучение',
      doPeriod: '1 день',
      dateStart: '01.01.2020',
      dateEnd: '02.02.2020',
      mentor: 'Нижний Новгород',
      materials: 'http://link'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface Template {
  task: string;
  formLearn: string;
  doPeriod: string;
  dateStart: string;
  dateEnd: string;
  mentor: string;
  materials: string;
}
