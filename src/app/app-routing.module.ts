import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', 
  loadChildren:() => import ('../app/auth/auth.module').then(x => x.AuthModule)},
  {path:'**', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
