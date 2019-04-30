import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from 'src/app/home-page/home-page.component';
import {SignUpComponent} from 'src/app/sign-up/sign-up.component';
import {SignInComponent} from 'src/app/sign-in/sign-in.component';

const routes: Routes = [
  {path:'' , component:HomePageComponent},
  {path:'signup', component:SignUpComponent},
  {path:'signin' , component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
