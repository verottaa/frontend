import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MenuItem} from '../sidebar/sidebar.component';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menus: MenuItem[] = [
    new MenuItem(1, 'home', 'Новый сотрудник', '/add-empl'),
    new MenuItem(2, 'file', 'Планы обучения', '/other'),
    new MenuItem(3, 'shopping-cart', 'Ведомости', '/other'),
    new MenuItem(4, 'users', 'Оценка знаний', '/other'),
    new MenuItem(5, 'bar-chart-2', 'Отчеты', '/other'),
  ];
  currentMenuItem: MenuItem = this.menus[0];

  dateTime: NgbDateStruct;
  public addEmployeeForm: FormGroup;
  public otherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addEmployeeForm = fb.group({
      surname: fb.control('', [Validators.required]),
      name: fb.control('', [Validators.required]),
      patronymic: fb.control('', [Validators.required]),
      dateOfStart: fb.control('', [Validators.required]),
      branch: fb.control('', [Validators.required]),
      department: fb.control('', [Validators.required]),
    });
    this.otherForm = fb.group({
      name: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onMenuItemChange($event): void {
    this.currentMenuItem = $event;
  }

  onAddEmployeeFormSubmit(): void {
    const user = new User();
    user.firstName = this.addEmployeeForm.controls['surname'].value;
    user.lastName = this.addEmployeeForm.controls['name'].value;
    user.patronymic = this.addEmployeeForm.controls['patronymic'].value;
    user.dateOfStart = this.addEmployeeForm.controls['dateOfStart'].value;
    user.branch = this.addEmployeeForm.controls['branch'].value;
    user.department = this.addEmployeeForm.controls['department'].value;
    console.log(user);
  }

  onOtherFormSubmit(): void {
    console.log('GGXX-XXGG-GGXX-XXGG');
  }

}
