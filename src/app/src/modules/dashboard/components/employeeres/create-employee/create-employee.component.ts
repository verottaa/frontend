import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserDto, User} from '../../../../../models/user';
import {UsersService} from '../../../../../services/users/users.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent implements OnInit {

  dateTime: NgbDateStruct;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private usersService: UsersService) {
    this.form = fb.group({
      surname: fb.control('', [Validators.required]),
      name: fb.control('', [Validators.required]),
      patronymic: fb.control('', [Validators.required]),
      dateOfStart: fb.control('', [Validators.required]),
      branch: fb.control('', [Validators.required]),
      department: fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {

  }


  onSubmit(): void {
    const user = new CreateUserDto();
    user.firstName = this.form.controls['surname'].value;
    user.lastName = this.form.controls['name'].value;
    user.patronymic = this.form.controls['patronymic'].value;
    user.dateOfStart = this.form.controls['dateOfStart'].value;
    user.branch = this.form.controls['branch'].value;
    user.department = this.form.controls['department'].value;
    this.usersService.createUser(user).subscribe(id => {
    });
  }

}
