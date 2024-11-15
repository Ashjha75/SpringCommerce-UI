import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonstateService} from '../../services/commonstate.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
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
    id?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    name?: string;
    price?: string;
    offerValue?: string;
    iconText?: string;
    time?: string;
    quantity?: string;
  } = {};

  @Output() cardClick = new EventEmitter<any>();

  addedToCart: boolean = false;

  constructor(private stateService: CommonstateService) {
  }

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

  get buttonLabel(): string {
    return this.addedToCart ? 'Remove from Cart' : 'Add to Cart';
  }

  get buttonType(): string {
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
