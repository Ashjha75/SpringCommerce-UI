import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonstateService } from '../../services/commonstate.service';
import { Subscription } from 'rxjs';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router'; // Import Subscription to manage subscriptions

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchPlaceholder: string = 'Search for products';
  private placeholderOptions: string[] = ['Search for products', 'Search for kurtti', 'Search for jeans', 'Search for brands', 'Search for anything'];
  private placeholderIndex: number = 0;
  private intervalId: any;
  dropdownVisible: boolean = false;

  // State management for user and cart data
  userState: { name: string; loggedIn: boolean } = { name: '', loggedIn: false };
  cartData: any[] = []; // Store the cart products
  cartTotal: number = 0;
  cartItemCount: number = 10;

  private subscriptions: Subscription[] = []; // Array to store subscriptions

  constructor(private stateService: CommonstateService,private router: Router) {}

  ngOnInit(): void {
    // Update search placeholder every 1.2 seconds
    this.intervalId = setInterval(() => {
      this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholderOptions.length;
      this.searchPlaceholder = this.placeholderOptions[this.placeholderIndex];
    }, 1200);

    // Subscribe to user state changes
    this.subscriptions.push(
      this.stateService.userState$.subscribe(state => {
        this.userState = state;
      })
    );

    // Subscribe to cart data changes
    this.subscriptions.push(
      this.stateService.cartData$.subscribe(cart => {
        this.cartData = cart;
        this.cartItemCount = cart.length; // Count of items in the cart
        this.cartTotal = this.stateService.getCartTotal(); // Get the total price of the cart
      })
    );
  }

  ngOnDestroy(): void {
    // Cleanup the interval and subscriptions
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Toggle dropdown visibility
  showDropdown(): void {
    this.dropdownVisible = true;
  }

  hideDropdown(): void {
    this.dropdownVisible = false;
  }

  protected readonly Number = Number;

  async userDetails(): Promise<void> {
    await this.router.navigate(['/login']);
  }
}
