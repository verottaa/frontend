import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../../../models/user';
import {UsersService} from '../../../../../services/users/users.service';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';
import {finalize, take, takeUntil} from 'rxjs/operators';
import {ConfirmModalComponent} from '../../../../../components/shared-components/modals/confirm-modal/confirm-modal.component';
import {AppointmentComponent} from '../appointment/appointment.component';
import {AlertService} from '../../../../../services/alert/alert.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit, OnDestroy {

  fakeData: User[] = User.generateFakeList(
    'Иванов',
    'Иван',
    'Иванович',
    'Ведущий разработчик',
    10);
  destroy$ = new Subject();
  showPreloader = false;

  users: User[] = [];

  constructor(private usersService: UsersService,
              private modalService: NgbModal,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.showPreloader = true;
    this.usersService.getUsers()
      .pipe(
        take(1),
        finalize(() => this.showPreloader = false),
      )
      .subscribe({
        next: users => this.users = users,
        error: () => this.users = this.fakeData,
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  addEmployee(): void {
    const modalRef = this.modalService.open(CreateEmployeeComponent, {centered: true, backdrop: 'static'});
    modalRef.result.then(() => {
      this.loadUsers();
    }, (error) => {
      this.createErrorAlertAndWriteErrorOnConsole(error);
    });
  }

  appointPlan(user: User): void {
    const modalRef = this.modalService.open(AppointmentComponent, {centered: true, backdrop: 'static'});
    modalRef.componentInstance.assignedToUser = user;
    modalRef.result.then((_) => {
      this.loadUsers();
    }, (error) => {
      this.createErrorAlertAndWriteErrorOnConsole(error);
    });
  }

  createErrorAlertAndWriteErrorOnConsole(error): void {
    this.alertService.createErrorAlert(error);
    console.error(error);
  }

  deleteEmployee(id: string): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, {centered: true, backdrop: 'static'});
    modalRef.componentInstance.message = 'Вы действительно хотите удалить сотрудника?';
    modalRef.result.then((result: string) => {
      if (result) {
        this.usersService.deleteUser(id).subscribe();
        this.deleteEmployeeAndReloadList(id);
      }
    }, (reject) => {
      console.error(reject);
    });
  }

  private deleteEmployeeAndReloadList(id: string): void {
    this.usersService.deleteUser(id).subscribe({
      next: (_) => {
        this.loadUsers();
      },
      error: (err) => {
        this.createErrorAlertAndWriteErrorOnConsole(err);
      }
    });
  }
}
