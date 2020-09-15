import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './src/components/app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {AuthModule} from './src/modules/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from './src/components/test-modal/test-modal.component';
import { LoginComponent } from './src/components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './src/components/dashboard/dashboard.component';
import { SidebarComponent } from './src/components/sidebar/sidebar.component';
import { HeaderComponent } from './src/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
