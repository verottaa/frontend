import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../../../models/user';
import {UsersService} from '../../../../../services/users/users.service';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';
import {takeUntil} from 'rxjs/operators';
import {ConfirmModalComponent} from '../../../../../components/shared-components/modals/confirm-modal/confirm-modal.component';
import {AppointmentComponent} from '../appointment/appointment.component';

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

  users: User[] = [];

  constructor(private usersService: UsersService,
              private modalService: NgbModal) {
    this.usersService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: users => this.users = users,
        error: () => this.users = this.fakeData,
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  addEmployee(): void {
    const modalRef = this.modalService.open(CreateEmployeeComponent, {centered: true, backdrop: 'static'});
    modalRef.result.then(() => {
    }, (reject) => {
      console.error(reject);
    });
  }

  appointPlan(user: User): void {
    const modalRef = this.modalService.open(AppointmentComponent, {centered: true, backdrop: 'static'});
    modalRef.componentInstance.assignedToUser = user;
    modalRef.result.then((_) => {
    });
  }

  deleteEmployee(id: string): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, {centered: true, backdrop: 'static'});
    modalRef.componentInstance.message = 'Вы действительно хотите удалить сотрудника?';
    modalRef.result.then((result: string) => {
      if (result) {
        this.usersService.deleteUser(id).subscribe();
      }
    }, (reject) => {
      console.error(reject);
    });
  }
}
