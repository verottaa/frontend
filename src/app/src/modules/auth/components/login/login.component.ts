import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserCredentials} from '../../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    login: 'admin',
    password: 'admin',
  };

  public form: FormGroup;

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {
    this.form = fb.group({
      login: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.form.invalid && this.form.touched) {
      if (this.form.controls['login'].value === this.user.login && this.form.controls['password'].value === this.user.password) {
        const credentials: UserCredentials = {
          login: this.form.controls['login'].value,
          password: this.form.controls['password'].value,
        };

        this.auth.CheckCredentials(credentials);

        this.router.navigate(['/dashboard']);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}
