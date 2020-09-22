import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardType} from '../../models/dashboard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: `/dashboard/${DashboardType.CREATE_EMPLOYEE}`},
  {path: ':type', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
