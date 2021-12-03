import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OfferAddComponent} from "./components/offer-add/offer-add.component";
import {OffersAllComponent} from "./components/offers-all/offers-all.component";
import {OfferUpdateComponent} from "./components/offer-update/offer-update.component";
import {OfferDetailsComponent} from "./components/offer-details/offer-details.component";
import {BrandAddComponent} from "./components/brand-add/brand-add.component";
import {BrandsAllComponent} from "./components/brands-all/brands-all.component";
import {ModelsAllComponent} from "./components/models-all/models-all.component";
import {ModelAddComponent} from "./components/model-add/model-add.component";

const routes: Routes = [
  {path: 'brands', component: BrandsAllComponent},
  {path: 'brands/add', component: BrandAddComponent},
  {path: 'models', component: ModelsAllComponent},
  {path: 'models/add', component: ModelAddComponent},
  {path: 'offers', component: OffersAllComponent},
  {path: 'offers/add', component: OfferAddComponent},
  {path: 'offers/details/:id', component: OfferDetailsComponent},
  {path: 'offers/update/:id', component: OfferUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
