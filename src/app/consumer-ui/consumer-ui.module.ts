import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerUiRoutingModule } from './consumer-ui-routing.module';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from '../common-ui/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ConsumerUiRoutingModule,
    CommonUiModule
  ]
})
export class ConsumerUiModule { }
