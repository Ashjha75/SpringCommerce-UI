import { Component } from '@angular/core';
import { CardSliderComponent } from '../../common-ui/card-slider/card-slider.component';
import { CardComponent } from '../../common-ui/card/card.component';
import { NgForOf } from '@angular/common';
import { CommonUiModule } from '../../common-ui/common-ui.module';
import { ArrowSliderComponent } from '../../common-ui/arrow-slider/arrow-slider.component';

import { Category } from '../../../assets/data/jsonData';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardSliderComponent,
    CardComponent,
    NgForOf,
    CommonUiModule,
    ArrowSliderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'SpringCommerce';
  categoryData = Category;
  offers = [
    { image: 'assets/img/offers7.jpg' },
    { image: 'assets/img/offers2.jpg' },
    { image: 'assets/img/offers8.jpg' },
    { image: 'assets/img/offers4.jpg' },
    { image: 'assets/img/offers6.jpg' }
  ];
  cardSettings = {
    showTitle: true,
    showDescription: true,
    showImage: true,
    showPrice: true,
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 ',
    imgcss: 'w-[18rem] h-[18rem] rounded-lg'
  };
  cartCardSettings = {
    showTitle: true,
    showDescription: false,
    showImage: true,
    showPrice: false,
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 card-background',
    imgcss: 'w-[10rem] h-[10rem] rounded-lg card-image'
  };


  sliderSettings = {
    showArrows: true,
    autoSlide: true,
    slideInterval: 5000,
    cardsPerSlide: 6
  };
}
