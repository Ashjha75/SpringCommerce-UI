// src/app/consumer-ui/home/home.component.ts

import {Component} from '@angular/core';
import {CardSliderComponent} from '../../common-ui/card-slider/card-slider.component';
import {CardComponent} from '../../common-ui/card/card.component';
import {NgForOf} from '@angular/common';
import {CommonUiModule} from '../../common-ui/common-ui.module';
import {ArrowSliderComponent} from '../../common-ui/arrow-slider/arrow-slider.component';
import {categoryData, cardData, foodData, featuresData, product1} from '../../../assets/data/jsonData';
import {CartCardComponent} from '../../common-ui/cart-card/cart-card.component';
import {CommonstateService} from '../../services/commonstate.service';
import {FooterComponent} from '../../common-ui/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private commonstateService: CommonstateService) {
  }

  categoryData = categoryData;
  cardData = cardData;
  foodData = foodData;
  featuresData = featuresData;
  product1 = product1;
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
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 card-border',
    imgcss: 'w-[18rem] h-[18rem] rounded-lg'
  };
  cartCardSettings = {
    showTitle: false,
    showDescription: false,
    showImage: true,
    offerValue: '12.99 % Off',
    showPrice: false,
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 card-background card-border',
    imgcss: 'w-[10rem] h-[10rem] rounded-lg card-image'
  };
  foodCardSettings = {
    showTitle: true,
    showDescription: false,
    showImage: true,
    showPrice: false,
    showIcon: true,
    extraCssClasses: ' mt-7   p-0 w-[11.5rem] h-[15rem] rounded-3xl',
    imgcss: 'w-[10rem] h-[10rem] rounded-lg card-image ',
    titlecss: 'text-secondary text-sm '
  };
  sliderSettings = {
    showArrows: true,
    autoSlide: true,
    slideInterval: 4000,
    cardsPerSlide: 6
  };
  foodsliderSettings = {
    showArrows: true,
    autoSlide: true,
    slideInterval: 5000,
    cardsPerSlide: 5,
    slideDir: "horizontal" as "horizontal" | "vertical",
    extraCssClasses: 'w-full bg-white',
  };
  dealsliderSettings = {
    showArrows: false,
    autoSlide: true,
    slideInterval: 5000,
    cardsPerSlide: 5,
    slideDir: "vertical" as "horizontal" | "vertical"
  };
  dealSettings = {
    showTitle: false,
    showDescription: false,
    showImage: true,
    showPrice: false,
    extraCssClasses: 'w-fit p-2 mt-7 mb-2 card-border',
    imgcss: 'w-[20rem] h-[18rem] rounded-lg',

  };
  productCardSettings = {
    showTitle: true,
    showDescription: false,
    showImage: true,
    showPrice: false,
    showIcon: true,
    extraCssClasses: ' mt-7   p-0 w-[16.5rem] h-[26rem] rounded-3xl ',
    imgcss: 'w-full h-[12rem] rounded-lg card-image ',
    titlecss: 'text-secondary text-sm '
  };
  productSliderSettings = {
    showArrows: true,
    autoSlide: false,
    slideInterval: 5000,
    cardsPerSlide: 4,
    slideDir: "horizontal" as "horizontal" | "vertical",
    extraCssClasses: 'w-full bg-white',
  };

  isPresentInCart(product: any) {
    const cartProductIds = this.commonstateService.getCartProductIds();
    return cartProductIds.includes(product.id);

  }

  handleCardClick($event: any) {

  }
}
