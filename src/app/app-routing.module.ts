import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{path:'login',loadChildren:()=>import('./login/login.module').then(l=>l.LoginModule)},
                        {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(l=>l.DashboardModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
