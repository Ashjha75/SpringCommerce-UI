import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ButtonComponent
  ],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {
  @Input() settings: {
    showTitle?: boolean;
    showDescription?: boolean;
    showImage?: boolean;
    showPrice?: boolean;
    showIcon?: boolean;
    extraCssClasses?: string;
    imgcss?: string;
    titlecss?: string;
    iconCss?: string;
  } = {};

  @Input() data: {
    title?: string;
    description?: string;
    imageUrl?: string;
    name?: string;
    price?: string;
    offerValue?: string;
    iconText?: string,
  } = {};

  @Output() cardClick = new EventEmitter<any>();

  get defaultSettings() {
    return {
      showTitle: false,
      showDescription: false,
      showImage: false,
      showPrice: false,
      showIcon: false,
      extraCssClasses: '',
      imgcss: '',
      titlecss: '',
      iconCss: '',
      offerValue: '',
      ...this.settings
    };
  }

  get defaultData() {
    return {
      title: '',
      description: '',
      imageUrl: '',
      name: '',
      price: '',
      iconText: '',
      ...this.data
    };
  }

  onCardClick() {
    this.cardClick.emit(this.defaultData);
  }

}
