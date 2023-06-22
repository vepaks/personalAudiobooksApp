import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // Add routes to the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
