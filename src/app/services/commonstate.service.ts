import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// @ts-ignore
import { Product } from '../../assets/data/jsonData'; // Assuming you have a Product interface

@Injectable({
    providedIn: 'root',
})
export class CommonstateService {
    constructor() {}

    // User state management
    private userStateSubject = new BehaviorSubject<any>({
        name: '',
        loggedIn: false,
    });

    userState$ = this.userStateSubject.asObservable();

    setUserState(name: string, loggedIn: boolean) {
        this.userStateSubject.next({ name, loggedIn });
    }

    getUserState(): any {
        return this.userStateSubject.getValue();
    }

    // Cart state management (Product[])
    private cartData = new BehaviorSubject<Product[]>([]);
    cartData$ = this.cartData.asObservable();

    // Set the entire cart data (useful when fetching from an API or resetting cart)
    setCartData(data: Product[]) {
        this.cartData.next(data);
    }

    getCartData(): Product[] {
        return this.cartData.getValue();
    }

    /**
     * Adds a product to the cart. If the product already exists, we increase the quantity.
     * @param product The product to be added to the cart
     */
    addProductToCart(product: Product) {
        const currentData = this.cartData.getValue();

        // Check if the product already exists in the cart (by product ID or name)
        const existingProductIndex = currentData.findIndex(
            (p) => p.id === product.id
        );

        if (existingProductIndex !== -1) {
            // If the product already exists, increment the quantity (if you're tracking it)
            const updatedCart = [...currentData];
            updatedCart[existingProductIndex].quantity! += 1; // Optional: Only if you're tracking quantity
            this.cartData.next(updatedCart);
        } else {
            // If not, add the new product with an initial quantity of 1
            this.cartData.next([...currentData, { ...product, quantity: 1 }]);
        }
    }

    /**
     * Removes a product from the cart.
     * @param product The product to be removed
     */
    removeProductFromCart(product: Product) {
        const currentData = this.cartData.getValue();

        // Find the index of the product to be removed
        const productIndex = currentData.findIndex((p) => p.id === product.id);

        if (productIndex !== -1) {
            // Remove the product from the cart
            const updatedCart = [...currentData];
            updatedCart.splice(productIndex, 1);
            this.cartData.next(updatedCart);
        }
    }

    /**
     * Clears the entire cart.
     */
    clearCart() {
        this.cartData.next([]);
    }

    /**
     * Calculates the total price of the cart.
     * @returns The total price of the items in the cart
     */
    getCartTotal(): number {
        return this.cartData
            .getValue()
            .reduce((acc: number, product: Product) => acc + product.price * (product.quantity || 1), 0);
    }

    /**
     * Gets the total number of items in the cart.
     * @returns The total number of items in the cart (not the quantity)
     */
    getCartItemCount(): number {
        return this.cartData
            .getValue()
            .reduce((acc: number, product: Product) => acc + (product.quantity || 1), 0);
    }
}
