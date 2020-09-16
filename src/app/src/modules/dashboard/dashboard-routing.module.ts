import {RouterModule, Routes} from '@angular/router';
import {AddEmplComponent} from './components/add-empl/add-empl.component';
import {NgModule} from '@angular/core';
import {TestComponentComponent} from './components/test-component/test-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'add-empl', pathMatch: 'full'},
  {path: 'add-empl', component: AddEmplComponent},
  {path: 'other', component: TestComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
