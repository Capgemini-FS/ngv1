import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelTestModule } from './model-test/model-test.module';

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelTestModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 