import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OfferService} from "./services/offer-service";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {OffersAllComponent} from './components/offers-all/offers-all.component';
import {OfferAddComponent} from './components/offer-add/offer-add.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { OfferUpdateComponent } from './components/offer-update/offer-update.component';
import { BrandsAllComponent } from './components/brands-all/brands-all.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ModelsAllComponent } from './components/models-all/models-all.component';
import { ModelAddComponent } from './components/model-add/model-add.component';
import {BrandService} from "./services/brand-service";
import {ModelService} from "./services/model-service";

@NgModule({
  declarations: [
    AppComponent,
    OffersAllComponent,
    OfferAddComponent,
    OfferDetailsComponent,
    OfferUpdateComponent,
    BrandsAllComponent,
    BrandAddComponent,
    ModelsAllComponent,
    ModelAddComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
  providers: [BrandService, ModelService, OfferService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
