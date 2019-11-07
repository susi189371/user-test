import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatGridListModule, 
  MatCardModule, 
  MatListModule,
  MatLineModule, 
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataServiceService} from './services/data-service.service';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
