import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './src/components/app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';
import {AuthModule} from './src/modules/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardModule} from './src/modules/dashboard/dashboard.module';
import {ConfirmModalComponent} from './src/components/shared-components/modals/confirm-modal/confirm-modal.component';
import {ComponentModalComponent} from './src/components/shared-components/modals/component-modal/component-modal.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './src/interceptors/auth-interceptor.service';
import {AlertComponent} from './src/components/shared-components/alert/alert.component';
import {AlertsListComponent} from './src/components/shared-components/alerts-list/alerts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmModalComponent,
    ComponentModalComponent,
    AlertComponent,
    AlertsListComponent,
  ],
  imports: [
    HttpClientModule,
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
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
