import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './src/components/app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {AuthModule} from './src/modules/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from './src/components/test-modal/test-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
