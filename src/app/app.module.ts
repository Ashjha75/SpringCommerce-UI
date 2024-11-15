import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './consumer-ui/home/home.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import {HeaderComponent} from './common-ui/header/header.component';
import {ConsumerUiModule} from './consumer-ui/consumer-ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUiModule,
    ConsumerUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
