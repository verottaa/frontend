import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './src/components/app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {AuthModule} from './src/modules/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './src/components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardModule} from './src/modules/dashboard/dashboard.module';
import { AddEmplComponent } from './src/modules/dashboard/components/add-empl/add-empl.component';
import { DashboardComponent } from './src/modules/dashboard/components/dashboard/dashboard.component';
import { HeaderComponent } from './src/modules/dashboard/components/header/header.component';
import { SidebarComponent } from './src/modules/dashboard/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
