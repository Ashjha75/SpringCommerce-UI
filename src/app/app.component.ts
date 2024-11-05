import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './common-ui/header/header.component';
import {CardSliderComponent} from './common-ui/card-slider/card-slider.component';
import {CommonUiModule} from './common-ui/common-ui.module';
import {CardComponent} from './common-ui/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardSliderComponent, CommonUiModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpringCommerce';
  offers = [
    {image: 'assets/img/offers1.jpg'},
    {image: 'assets/img/offers2.jpg'},
    {image: 'assets/img/offers3.jpg'},
    {image: 'assets/img/offers4.jpg'},
    {image: 'assets/img/offers5.jpg'}
  ];
  cardSettings = {
    showTitle: true,
    showDescription: true,
    showImage: true,
    extraCssClasses: 'custom-css-class'
  };

  cardData = {
    title: 'Sample Card Title',
    description: 'This is a sample description for the card.',
    imageUrl: 'assets/img/cardProduct1.jpg'
  };
}
