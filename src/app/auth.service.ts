import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router, private cookieServices: CookieService) {
  }

  setToken(token: string) {
    this.cookieServices.set('token', token);
  }

  getToken() {
    return this.cookieServices.get('token');
  }

  isLoggedIn() {
    return this.getToken() !== '';
  }

  async logout() {
    this.cookieServices.delete('token');
    await this.route.navigate(['/login']);
  }
}
