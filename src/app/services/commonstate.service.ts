import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
// @ts-ignore
import {cardData} from '../../assets/data/jsonData';

interface UserState {
  name: string;
  loggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CommonstateService {
  constructor() {
  }
  /*NOTES==>>>>*/
/**
 * \*\*BehaviorSubject\*\*: A BehaviorSubject is used here because it holds the current value and emits it to any new subscribers.
 * This allows components to reactively update whenever the state changes.
 *
 * \*\*userState$\*\*: This is an observable that will emit the current state whenever it's updated.
 *
 * \*\*setUserState()\*\*: This method updates the user state with the provided values (e.g., after login).
 *
 * \*\*getUserState()\*\*: This method returns the current user state, allowing components to retrieve it.
 */


  private userStateSubject = new BehaviorSubject<UserState>({
    name: '',
    loggedIn: false
  });

  userState$ = this.userStateSubject.asObservable();


  setUserState(name: string, loggedIn: boolean) {
    this.userStateSubject.next({name, loggedIn});
  }

  getUserState(): UserState {
    return this.userStateSubject.getValue();
  }

  private cartData = new BehaviorSubject<cardData>([]);
  cartData$ = this.cartData.asObservable();

  setCartData(data: any) {
    this.cartData.next(data);
  }

  getCartData() {
    return this.cartData.getValue();
  }

  addProductToCart(product: any) {
    const currentData = this.cartData.getValue();
    currentData.push(product);
    this.cartData.next(currentData);
  }

  removeProductFromCart(product: any) {
    const currentData = this.cartData.getValue();
    const index = currentData.findIndex((p: any) => p.name === product.name);
    if (index !== -1) {
      currentData.splice(index, 1);
      this.cartData.next(currentData);
    }
  }

  clearCart() {
    this.cartData.next([]);
  }

  getCartTotal() {
    return this.cartData.getValue().reduce((acc: number, product: any) => acc + product.price, 0);
  }


}
