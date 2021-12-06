import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelTestRoutingModule } from './model-test-routing.module';
import { ModelTestComponent } from './model-test.component';


@NgModule({
  declarations: [ModelTestComponent],
  imports: [
    CommonModule,
    ModelTestRoutingModule
  ]
})
export class ModelTestModule { }
