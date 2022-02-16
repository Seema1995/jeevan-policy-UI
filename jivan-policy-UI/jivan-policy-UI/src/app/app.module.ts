import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

let routesConfig : Routes = [
  { path: '', component: LoginComponent },
  { path :'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'policyDetails', component: PolicyDetailsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolicyDetailsComponent,
    RegisterUserComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routesConfig),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
