import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonUiRoutingModule} from './common-ui-routing.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CardComponent} from './card/card.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonUiRoutingModule,
    SidebarComponent,
    CardComponent
  ]
})
export class CommonUiModule {
}
