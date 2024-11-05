import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchPlaceholder: string = 'Search for products';
  private placeholderOptions: string[] = ['Search for products', 'Search for kurtti', 'Search for jeans', 'Search for brands', 'Search for anything'];
  private placeholderIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholderOptions.length;
      this.searchPlaceholder = this.placeholderOptions[this.placeholderIndex];
    }, 1200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
