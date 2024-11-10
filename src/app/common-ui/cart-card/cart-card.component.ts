import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DecimalPipe, NgClass, NgIf} from '@angular/common';
import {ButtonComponent} from '../button/button.component';
import {CommonstateService} from '../../services/commonstate.service';
// @ts-ignore
import {product1} from '../../assets/data/jsonData';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ButtonComponent,
    DecimalPipe
  ],
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {
  addedToCart: boolean = false;

  constructor(private stateService: CommonstateService) {
  }

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
    time?: string
    quantity?: string
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
      time: '',
      ...this.settings
    };
  }

  get defaultData() {
    return {
      id: '',
      title: '',
      description: '',
      imageUrl: '',
      name: '',
      price: '',
      iconText: '',
      quantity: '',
      ...this.data
    };
  }

  getButtonLabel(): string {
    return this.addedToCart ? 'Remove from Cart' : 'Add to Cart';
  }

  getButtonType(): string {
    return this.addedToCart ? 'secondary' : 'primary';
  }

  onCardClick(): void {
    this.addedToCart = !this.addedToCart;
    if (this.addedToCart) {
      this.stateService.addProductToCart(this.defaultData);
    } else {
      this.stateService.removeProductFromCart(this.defaultData.id);
    }
    this.cardClick.emit(this.defaultData);
  }
}
