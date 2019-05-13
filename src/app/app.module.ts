import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './page/footer/footer.component';
import { HeaderComponent } from './page/header/header.component';
import { SignUpComponent } from './page/login/sign-up/sign-up.component';
import { SignInComponent } from './page/login/sign-in/sign-in.component';
import { AddUserComponent } from './page/user/add-user/add-user.component';
import { EditUserComponent } from './page/user/edit-user/edit-user.component';
import { ListUserComponent } from './page/user/list-user/list-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
