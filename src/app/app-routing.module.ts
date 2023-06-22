import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AddBookComponent} from "./components/add-book/add-book.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Add home component
  { path: 'users/login', component: LoginComponent }, // Add login component
  { path: 'users/register', component: RegisterComponent }, // Add register component
  { path: 'audiobooks/add-book', component: AddBookComponent }, // Add add-book component
  { path: 'audiobooks/:id', component: AddBookComponent }, // Add single book component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
