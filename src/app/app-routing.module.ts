import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './src/components/login/login.component';
import { AddEmplComponent } from './src/modules/dashboard/components/add-empl/add-empl.component';
import { DashboardComponent } from './src/modules/dashboard/components/dashboard/dashboard.component';
import { PlansComponent } from './src/modules/dashboard/components/plans/plans.component';
// import {DashboardComponent} from './src/components/dashboard/dashboard.component';
// import { AddEmplComponent } from './src/components/add-empl/add-empl.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/', component: DashboardComponent},
  {path: 'add-empl', component: AddEmplComponent},
  {path: 'plans', component: PlansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
