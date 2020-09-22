import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plansForm: FormGroup;
  constructor(private fb: FormBuilder) {
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

}
