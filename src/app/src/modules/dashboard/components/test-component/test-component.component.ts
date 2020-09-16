import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      name: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    console.log('GGXX-XXGG-GGXX-XXGG');
  }

}
