import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import {ConsumerUiModule} from './consumer-ui/consumer-ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsumerUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
