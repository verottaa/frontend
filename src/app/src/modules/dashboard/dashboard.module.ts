import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlansComponent} from './components/plans/plans.component';
import {CreateEmployeeComponent} from './components/employeeres/create-employee/create-employee.component';
import {EmployersComponent} from './components/employeeres/employeeres/employers.component';
import {PlansConstructorComponent} from './components/plans/plans-constructor/plans-constructor.component';
import {StepComponent} from './components/plans/plans-constructor/step/step.component';
import {ControlPanelComponent} from './components/plans/plans-constructor/control-panel/control-panel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AppointmentComponent } from './components/employeeres/appointment/appointment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    CreateEmployeeComponent,
    PlansComponent,
    EmployersComponent,
    PlansConstructorComponent,
    StepComponent,
    ControlPanelComponent,
    UserProfileComponent,
    AdminProfileComponent,
    AppointmentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule {
}
