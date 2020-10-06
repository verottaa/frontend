import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlansComponent} from './components/plans/plans.component';
import {CreateEmployeeComponent} from './components/employeeres/create-employee/create-employee.component';
import {EmployersComponent} from './components/employeeres/employeeres/employers.component';
import {PlansConstructorComponent} from './components/plans/plans-constructor/plans-constructor.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    CreateEmployeeComponent,
    PlansComponent,
    EmployersComponent,
    PlansConstructorComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule {
}
