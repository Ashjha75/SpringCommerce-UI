// src/app/consumer-ui/home/home.component.ts

import {Component} from '@angular/core';
import {CardSliderComponent} from '../../common-ui/card-slider/card-slider.component';
import {CardComponent} from '../../common-ui/card/card.component';
import {NgForOf} from '@angular/common';
import {CommonUiModule} from '../../common-ui/common-ui.module';
import {ArrowSliderComponent} from '../../common-ui/arrow-slider/arrow-slider.component';
// @ts-ignore
import {categoryData, cardData, foodData} from '../../../assets/data/jsonData';

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
  categoryData = categoryData;
  cardData = cardData;
  foodData = foodData;
  offers = [
    {image: 'assets/img/offers7.jpg'},
    {image: 'assets/img/offers2.jpg'},
    {image: 'assets/img/offers8.jpg'},
    {image: 'assets/img/offers4.jpg'},
    {image: 'assets/img/offers6.jpg'}
  ];
  cardSettings = {
    showTitle: false,
    showDescription: false,
    showImage: true,
    showPrice: true,
    showOffer: false,
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 card-border',
    imgcss: 'w-[18rem] h-[18rem] rounded-lg'
  };
  cartCardSettings = {
    showTitle: false,
    showDescription: false,
    showImage: true,
    showOffer: true,
    offerValue: '12.99 % Off',
    showPrice: false,
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 card-background card-border',
    imgcss: 'w-[10rem] h-[10rem] rounded-lg card-image'
  };
  sliderSettings = {
    showArrows: true,
    autoSlide: true,
    slideInterval: 5000,
    cardsPerSlide: 6
  };
  foodCardSettings = {
    showTitle: true,
    showDescription: false,
    showImage: true,
    showPrice: false,
    showOffer: false,
    extraCssClasses: ' mt-7   p-0 w-[10.5rem] h-[15rem] rounded-3xl',
    imgcss: 'w-[10rem] h-[10rem] rounded-lg card-image ',
    titlecss: 'text-secondary text-sm '
  };
}
