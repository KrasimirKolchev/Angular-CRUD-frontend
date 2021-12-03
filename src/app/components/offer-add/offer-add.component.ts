import {Component, OnInit} from '@angular/core';
import {Offer} from "../../models/offer";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../../services/offer-service";
import {VModel} from "../../models/vModel";
import {ModelService} from "../../services/model-service";

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {
  offer: Offer;
  models: VModel[] = [];
  engines: Array<String> = [];
  transmissions: Array<String> = [];
  vehConditions: Array<String> = [];
  vModel: VModel;

  constructor(private route: ActivatedRoute, private router: Router, private offerService: OfferService,
              private modelService: ModelService) {
    this.offer = new Offer();
    this.engines = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];
    this.transmissions = ['Manual', 'Automatic'];
    this.vehConditions = ['New', 'Used'];
    this.vModel = new VModel();
  }

  ngOnInit(): void {
    this.modelService.findAll().subscribe(data => {
      this.models = data
    });
  }

  onSubmit() {
    // @ts-ignore
    this.offer.creationDate = new Date();
    this.offerService.createOffer(this.offer).subscribe(res => this.gotoOffers());
  }

  private gotoOffers() {
    this.router.navigate(['/offers']);
  }

  change($event: any) {
    // @ts-ignore
    let startYear = this.models.find(m => m.id == $event.target.value).startYear;
    // @ts-ignore
    let endYear = this.models.find(m => m.id === $event.target.value).endYear;
    // @ts-ignore
    document.getElementById('year').setAttribute('min', startYear);
    // @ts-ignore
    document.getElementById('year').setAttribute('max', (endYear >= 0 ? 2021 : endYear));
  }
}
