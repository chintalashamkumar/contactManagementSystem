import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {KeysPipe} from '../assets/pipes/app.pipe';
import {ModalModule} from 'ngx-bootstrap';
import { CommanModelComponent } from '../assets/shared/comman-model/comman-model.component';
import { AddContactComponent } from '../assets/shared/add-contact/add-contact.component';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    HomeComponent,
    KeysPipe,
    CommanModelComponent,
    AddContactComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  entryComponents: [CommanModelComponent , AddContactComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
