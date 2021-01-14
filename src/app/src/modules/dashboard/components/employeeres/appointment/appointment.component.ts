import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../../models/user';
import {AssignToCreate} from '../../../../../models/assignment';
import {UsersService} from '../../../../../services/users/users.service';
import {AlertService} from '../../../../../services/alert/alert.service';
import {AssignService} from '../../../../../services/assign/assign.service';
import {PlanService} from '../../../../../services/plan/plan.service';
import {take} from 'rxjs/operators';
import {Plan} from '../../../../../models/plan';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public form: FormGroup;
  public assignedToUser: User;
  public assignment: AssignToCreate;

  public plans: Plan[] = [];

  constructor(private fb: FormBuilder,
              private assignService: AssignService,
              private planService: PlanService,
              private alertService: AlertService,
              public activeModal: NgbActiveModal) {
    this.assignment = new AssignToCreate();
    this.form = fb.group({
      plan: fb.control(this.assignment.planId, [Validators.required]),
      date: fb.control(this.assignment.startDate, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.planService.getPlans()
      .pipe(take(1))
      .subscribe(plans => {
        this.plans = plans;
      });
  }

  submitAssignment(): void {
    this.assignment.startDate = this.form.controls['date'].value;
    this.assignment.planId = this.form.controls['plan'].value;
    this.assignment.userId = this.assignedToUser.id;
    this.assignService.assign(this.assignment).subscribe({
      next: (result) => {
        this.alertService.createSuccessAlert('План обучения успешно назначен');
        this.closeModal();
      },
      error: (error) => {
        this.alertService.createErrorAlert('Не удалось назначить план обучения');
      }
    });
  }

  closeModal(): void {
    this.activeModal.close();
  }

  getName(): string {
    return `${this.assignedToUser.surname} ${this.assignedToUser.name} ${this.assignedToUser.patronymic}`;
  }
}
