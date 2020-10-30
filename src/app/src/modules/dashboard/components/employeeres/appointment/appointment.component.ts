import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UsersService} from '../../../../../services/users/users.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private modalService: NgbModal) {
    this.form = fb.group({
      plan: fb.control('', [Validators.required]),
      date: fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  CloseModal(): void {
    const modalRef = this.modalService.dismissAll();
  }
}
