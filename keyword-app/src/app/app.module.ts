import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './com/keyword/header/header.component';
import { FooterComponent } from './com/keyword/footer/footer.component';
import { KeywordSuggessionComponent } from './com/keyword/keyword-suggession/keyword-suggession.component';
import { RequesterInformationComponent } from './com/keyword/keyword-suggession/requester-information/requester-information.component';
import { HotelDetailsComponent } from './com/keyword/keyword-suggession/hotel-details/hotel-details.component';
import { AddKeywordsComponent } from './com/keyword/keyword-suggession/add-keywords/add-keywords.component';
import { ShowKeywordsComponent } from './com/keyword/keyword-suggession/show-keywords/show-keywords.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KeywordSuggessionComponent,
    RequesterInformationComponent,
    HotelDetailsComponent,
    AddKeywordsComponent,
    ShowKeywordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
