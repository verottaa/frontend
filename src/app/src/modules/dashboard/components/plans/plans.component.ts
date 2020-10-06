import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  const;
  fakeData: Plan[] = [
    {id: '123165469', title: 'Дежурный ПО и БД'},
    {id: '163721846', title: 'Тестировщик-автоматизатор'},
    {id: '123143451', title: 'Технический эксперт'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

interface Plan {
  id: string;
  title: string;
}
