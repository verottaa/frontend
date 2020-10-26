import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardType} from '../../models/dashboard';
import {PlansConstructorComponent} from './components/plans/plans-constructor/plans-constructor.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: `/dashboard/${DashboardType.EMPLOYERS}`},
  {path: ':type', component: DashboardComponent},
  {path: 'plans/constructor', component: PlansConstructorComponent},
  {path: 'plans/constructor/:id', component: PlansConstructorComponent},
  {path: 'user-profile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
