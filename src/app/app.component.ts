import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './common-ui/header/header.component';
import {CardSliderComponent} from './common-ui/card-slider/card-slider.component';
import {CommonUiModule} from './common-ui/common-ui.module';
import {CardComponent} from './common-ui/card/card.component';
import {NgForOf} from '@angular/common';
import {HomeComponent} from './consumer-ui/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpringCommerce';
  offers = [
    {image: 'assets/img/offers7.jpg'},
    {image: 'assets/img/offers2.jpg'},
    {image: 'assets/img/offers8.jpg'},
    {image: 'assets/img/offers4.jpg'},
    {image: 'assets/img/offers6.jpg'}
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
  cardData = [{
    // title: 'Sample Card Title',
    // description: 'This is a sample description for the card.',
    imageUrl: 'assets/img/cardproduct7.png',
    name:'Skybags',
    price:'1999'
  },
    {
      // title: 'T shirt',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/cardproduct3.jpg',
      name:'Aldo',
      price:'999'
    },
    {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/cardproduct5.jpg',
      name:'Triumph',
      price:'199'
    }, {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/cardproduct2.jpg',
      name:'Calvin Klein',
      price:'399'
    }, {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/cardproduct4.jpg',
      name:'US. POLO',
      price:'699'
    }
    , {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/cardproduct8.png',
      name:'Sangria',
      price:'1299'
    }

  ]
  categoryData = [{
    // title: 'Sample Card Title',
    // description: 'This is a sample description for the card.',
    imageUrl: 'assets/img/category1.png',
    name:'Skybags',
    price:'1999'
  },
    {
      // title: 'T shirt',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/category3.png',
      name:'Aldo',
      price:'999'
    },
    {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/category8.png',
      name:'Triumph',
      price:'199'
    }, {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/category2.png',
      name:'Calvin Klein',
      price:'399'
    }, {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/category4.png',
      name:'US. POLO',
      price:'699'
    }
    , {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/category6.png',
      name:'Sangria',
      price:'1299'
    }, {
      // title: 'Sample Card Title',
      // description: 'This is a sample description for the card.',
      imageUrl: 'assets/img/category5.png',
      name:'Sangria',
      price:'1299'
    }

  ]
}
