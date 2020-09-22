import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  dateTime: NgbDateStruct;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
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
    const user = new User();
    user.firstName = this.form.controls['surname'].value;
    user.lastName = this.form.controls['name'].value;
    user.patronymic = this.form.controls['patronymic'].value;
    user.dateOfStart = this.form.controls['dateOfStart'].value;
    user.branch = this.form.controls['branch'].value;
    user.department = this.form.controls['department'].value;
    console.log(user);
  }

}
