import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { AppPreloadStrategy } from './appPreLoadStrategy';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, SharedModule],
  providers: [provideAnimationsAsync(), AppPreloadStrategy],
  bootstrap: [AppComponent],
})
export class AppModule {}
