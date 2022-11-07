import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import du module httpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Import du module httpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
