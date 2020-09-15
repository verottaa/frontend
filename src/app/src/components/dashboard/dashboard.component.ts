import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
    console.log(this.form.value);
  }

}
