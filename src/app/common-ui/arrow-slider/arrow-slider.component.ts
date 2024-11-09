import {Component, Input, OnInit, OnDestroy, TemplateRef, ElementRef, Renderer2} from '@angular/core';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-arrow-slider',
  templateUrl: './arrow-slider.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet
  ],
  styleUrls: ['./arrow-slider.component.css']
})
export class ArrowSliderComponent implements OnInit, OnDestroy {
  @Input() cards: any[] = [];
  @Input() settings: {
    showArrows?: boolean;
    autoSlide?: boolean;
    slideInterval?: number;
    cardsPerSlide?: number;
    slideDir?: 'horizontal' | 'vertical';
  } = {};
  @Input() cardTemplate!: TemplateRef<any>;
  currentIndex = 0;
  intervalId: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.settings = {
      showArrows: false,
      autoSlide: false,
      slideInterval: 3000,
      cardsPerSlide: 6,
      slideDir: 'horizontal',
      ...this.settings
    };

    if (this.settings.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.settings.slideInterval);
  }

  prevSlide() {
    this.addAnimationClass(this.settings.slideDir == "horizontal" ? 'slide-in-right' : 'slide-in-top');
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.getCardBatches().length - 1;
    this.resetAutoSlide();  // Reset auto-slide on manual navigation
  }

  nextSlide() {
    this.addAnimationClass(this.settings.slideDir == "horizontal" ? "slide-in-left" : 'slide-in-bottom');
    this.currentIndex = (this.currentIndex < this.getCardBatches().length - 1) ? this.currentIndex + 1 : 0;
    this.resetAutoSlide();  // Reset auto-slide on manual navigation
  }

  resetAutoSlide() {
    if (this.settings.autoSlide) {
      clearInterval(this.intervalId);
      this.startAutoSlide();
    }
  }

  getCardBatches() {
    const batches = [];
    const cardsPerSlide = this.settings.cardsPerSlide ?? 1;
    for (let i = 0; i < this.cards.length; i += cardsPerSlide) {
      batches.push(this.cards.slice(i, i + cardsPerSlide));
    }
    return batches;
  }

  addAnimationClass(className: string) {
    const sliderContainer = this.el.nativeElement.querySelector('.slider');
    this.renderer.addClass(sliderContainer, className);
    setTimeout(() => {
      this.renderer.removeClass(sliderContainer, className);
    }, 1000); // Duration of the animation
  }
}
