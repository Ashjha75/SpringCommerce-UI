import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsumerUiRoutingModule} from './consumer-ui-routing.module';
import {CommonUiModule} from '../common-ui/common-ui.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsumerUiRoutingModule,
    CommonUiModule
  ]
})
export class ConsumerUiModule {
}
