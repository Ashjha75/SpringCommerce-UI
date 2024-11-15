import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { ArrowSliderComponent } from './arrow-slider/arrow-slider.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { CartCardComponent } from './cart-card/cart-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SidebarComponent,
    CardComponent,
    ArrowSliderComponent,
    CardSliderComponent,
    CartCardComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    CardComponent,
    ArrowSliderComponent,
    CardSliderComponent,
    CartCardComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class CommonUiModule { }
