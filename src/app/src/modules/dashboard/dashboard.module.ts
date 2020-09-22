import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlansComponent} from './components/plans/plans.component';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    CreateEmployeeComponent,
    PlansComponent,
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
