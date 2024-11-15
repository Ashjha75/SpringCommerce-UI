import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './consumer-ui/home/home.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';
// export const routes: Routes = [
//   { path: '', redirectTo: 'consumerUi/', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: 'admin/login' }
// ];


function redirectBasedOnAuth(authService: AuthService) {
  return authService.isLoggedIn() ? '' : 'login';
}

export const routes: Routes = [
  { path: '123', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'redirect',
  //   redirectTo: (route, state) => redirectBasedOnAuth(route.injector.get(AuthService))
  // },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
