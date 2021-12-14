import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [{path:'',component:DashboardComponent,pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forChild(routes),AgGridModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
