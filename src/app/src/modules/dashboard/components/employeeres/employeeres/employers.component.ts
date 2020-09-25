import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../../../models/user';
import {UsersService} from '../../../../../services/users/users.service';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';
import {takeUntil} from 'rxjs/operators';
import {ConfirmModalComponent} from '../../../../../components/shared-components/modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit, OnDestroy {

  employers: User[] = [];
  destroy$ = new Subject();

  constructor(private usersService: UsersService,
              private modalService: NgbModal) {
    this.usersService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => this.employers = null ? [] : users);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  addEmployee(): void {
    const modalRef = this.modalService.open(CreateEmployeeComponent, {centered: true, backdrop: 'static'});
    modalRef.result.then((result: string) => {
    }, (reject) => {
      console.error(reject);
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
