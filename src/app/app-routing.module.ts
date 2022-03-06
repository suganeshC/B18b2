import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ToasterComponent } from './toaster/toaster.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'toast', component: ToasterComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
