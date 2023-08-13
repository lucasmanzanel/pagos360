import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptor } from './shared/interceptor/loader.interceptor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment.development';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // primeng
    ProgressSpinnerModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    SweetAlert2Module.forRoot(),

    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
      timeOut: 3000,
      // progressBar: true
    }),
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
