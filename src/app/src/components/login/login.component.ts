import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  // constructor(private router: Router,
  //   private fb: FormBuilder) {
  //   this.form = fb.group({
  //   login: fb.control('', [Validators.required]),
  //   password: fb.control('', [Validators.required]),
  //   });
  // }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   if(!this.form.invalid && this.form.touched){
  //     this.router.navigate(['/']);
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }
}
