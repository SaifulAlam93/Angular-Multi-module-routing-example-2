import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';

const routes: Routes = [

  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },

  // { path: 'auth', component: AuthComponent, children:[
  //   { path: 'login', component: LoginComponent },
  //   { path: 'signup', component: SignupComponent },
  //   { path: 'change-pass', component: ChangePasswordComponent },
  //   { path: '', component: LoginComponent },
  // ] },


  { path: 'auth', component: AuthComponent, loadChildren:() =>import('./auth/auth.module').then(x=>x.AuthModule) },


  { path: '', redirectTo: 'about-us', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
