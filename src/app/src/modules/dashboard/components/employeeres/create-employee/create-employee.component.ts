import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserDto, User} from '../../../../../models/user';
import {UsersService} from '../../../../../services/users/users.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertService} from '../../../../../services/alert/alert.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  dateTime: NgbDateStruct;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private alertService: AlertService,
              public activeModal: NgbActiveModal) {
    this.form = fb.group({
      surname: fb.control('', [Validators.required]),
      name: fb.control('', [Validators.required]),
      patronymic: fb.control('', [Validators.required]),
      position: fb.control('', [Validators.required]),
      dateOfStart: fb.control('', [Validators.required]),
      branch: fb.control('', [Validators.required]),
      department: fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user = new CreateUserDto();
    user.name = this.form.controls.name.value;
    user.surname = this.form.controls.surname.value;
    user.patronymic = this.form.controls.patronymic.value;
    user.position = this.form.controls.position.value;
    user.dateOfStart = this.form.controls.dateOfStart.value;
    user.branch = this.form.controls.branch.value;
    user.department = this.form.controls.department.value;
    this.usersService.createUser(user).subscribe({
      next: (id) => {
        this.showEmployeeCreatedSuccessfullyAlert();
        this.closeModal();
      },
      error: (err) => {
        this.showCantCreateEmployeeErrorAlert();
      }
    });
  }

  showEmployeeCreatedSuccessfullyAlert(): void {
    this.alertService.createSuccessAlert('Сотрудник успешно создан');
  }

  showCantCreateEmployeeErrorAlert(): void {
    this.alertService.createErrorAlert('Не удалось создать сотрудника');
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
