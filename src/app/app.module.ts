import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelTestModule } from './model-test/model-test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
// import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
// import { LoadingCellRenderer } from 'ag-grid-community/dist/lib/rendering/cellRenderers/loadingCellRenderer';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module'; //             11111111 ask if this needs to be imported in the app.mod.ts and why or why not !
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent, 
   //DashboardComponent
    // LoginComponent never put it in here
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelTestModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LoginModule,
    DashboardModule,
    MatGridListModule,
    MatTableModule,
    AgGridModule.withComponents(null)

  
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 