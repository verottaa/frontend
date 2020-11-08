import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../../models/user';
import {AssignmentToCreate} from '../../../../../models/assignment';
import {UsersService} from '../../../../../services/users/users.service';
import {AlertService} from '../../../../../services/alert/alert.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public form: FormGroup;
  public assignedToUser: User;
  public assignment: AssignmentToCreate;

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private alertService: AlertService,
              public activeModal: NgbActiveModal) {
    this.assignment = new AssignmentToCreate();
    this.form = fb.group({
      plan: fb.control(this.assignment.plan, [Validators.required]),
      date: fb.control(this.assignment.date, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitAssignment(): void {
    this.usersService.assignToUser(this.assignedToUser, this.assignment).subscribe({
      next: (result) => {
        this.alertService.createSuccessAlert('План обучения успешно назначен');
        this.closeModal();
      },
      error: (error) => {
        this.alertService.createErrorAlert('Не удалось назначить план обучения');
      }
    });
  };

  closeModal(): void {
    this.activeModal.close();
  }
}
