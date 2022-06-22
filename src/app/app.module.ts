import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicsCardDetailComponent } from './component/graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardListContainerComponent } from './component/graphics-card-list-container/graphics-card-list-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GraphicsCardDetailComponent,
    GraphicsCardListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
