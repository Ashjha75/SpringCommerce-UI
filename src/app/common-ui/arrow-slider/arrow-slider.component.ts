import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-arrow-slider',
  templateUrl: './arrow-slider.component.html',
  styleUrls: ['./arrow-slider.component.css'],
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
  isAnimating = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.settings = {
      showArrows: false,
      autoSlide: false,
      slideInterval: 3000,
      cardsPerSlide: 6,
      slideDir: 'horizontal',
      ...this.settings,
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

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  restartAutoSlide() {
    if (this.settings.autoSlide) {
      this.startAutoSlide();
    }
  }

  prevSlide() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.addAnimationClass(this.settings.slideDir === 'horizontal' ? 'slide-in-right' : 'slide-in-top');
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.getCardBatches().length - 1;
    this.resetAutoSlide();
  }

  nextSlide() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.addAnimationClass(this.settings.slideDir === 'horizontal' ? 'slide-in-left' : 'slide-in-bottom');
    this.currentIndex = this.currentIndex < this.getCardBatches().length - 1 ? this.currentIndex + 1 : 0;
    this.resetAutoSlide();
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
      this.isAnimating = false;
    }, 1000);
  }
}
