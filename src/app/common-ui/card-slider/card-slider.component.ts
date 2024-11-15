import { Component, Input, OnInit } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  @Input() offers: { image: string }[] = [];
  currentIndex = 0;
  transform = 'translateX(0%)';

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.offers.length;
      this.transform = `translateX(-${this.currentIndex * 100}%)`;
    }, 3200);
  }


}
