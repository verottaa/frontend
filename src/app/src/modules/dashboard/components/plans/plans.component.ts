import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CreateEmployeeComponent} from '../employeeres/create-employee/create-employee.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plansForm: FormGroup;

  constructor(private fb: FormBuilder,
              private modalService: NgbModal) {
    this.plansForm = fb.group({
      empl: fb.control('', [Validators.required]),
      direction: fb.control('', [Validators.required]),
      periodOfStudy: fb.control('', [Validators.required]),
      mentor: fb.control('', [Validators.required]),
      projectTask: fb.control('', [Validators.required]),
      conducting: fb.control('', [Validators.required]),
      peridoPlan: fb.control('', [Validators.required]),
      peridoFact: fb.control('', [Validators.required]),
      curator: fb.control('', [Validators.required]),
      materialLink: fb.control('', [Validators.required]),
      note: fb.control('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  softAndDB(): void {
    const modalRef = this.modalService.open(CreateEmployeeComponent, {centered: true, backdrop: 'static'});
    modalRef.result.then((result: string) => {
    }, (reject) => {
      console.error(reject);
    });
  }
}
