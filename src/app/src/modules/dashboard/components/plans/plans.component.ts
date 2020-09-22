import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plansForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.plansForm = fb.group({
      
    });
   }

  ngOnInit(): void {
  }

}
