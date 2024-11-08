import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [NgIf, NgClass]
})
export class CardComponent {
  @Input() settings: {
    showTitle?: boolean;
    showDescription?: boolean;
    showImage?: boolean;
    showPrice?: boolean;
    extraCssClasses?: string;
    imgcss?: string;
    titlecss?: string;
    offerValue?: string,
    showOffer?: boolean,
  } = {};

  @Input() data: {
    title?: string;
    description?: string;
    imageUrl?: string;
    name?: string;
    price?: string;
  } = {};

  get defaultSettings() {
    return {
      showTitle: false,
      showDescription: false,
      showImage: false,
      showPrice: false,
      extraCssClasses: '',
      imgcss: '',
      titlecss: '',
      offerValue: '',
      showOffer: false,
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
      ...this.data
    };
  }
}
