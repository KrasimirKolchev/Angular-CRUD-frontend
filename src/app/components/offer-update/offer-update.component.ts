import {Component, OnInit} from '@angular/core';
import {Offer} from "../../models/offer";
import {OfferService} from "../../services/offer-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-offer-update',
  templateUrl: './offer-update.component.html',
  styleUrls: ['./offer-update.component.css']
})
export class OfferUpdateComponent implements OnInit {
  id: string = '';
  offer: Offer = new Offer();
  engines: Array<String> = [];
  transmissions: Array<String> = [];
  vehConditions: Array<String> = [];

  constructor(private offerService: OfferService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offerService.getOffer(this.id).subscribe(data => {this.offer = data});

    this.engines = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];
    this.transmissions = ['Manual', 'Automatic'];
    this.vehConditions = ['New', 'Used'];
  }

  onSubmit() {
    this.updateOffer();
  }

  private updateOffer() {
    this.offerService.updateOffer(this.id, this.offer)
      .subscribe(data => {this.gotoOffers()}, (error) => console.log(error));
  }

  private gotoOffers() {
    this.router.navigate(['/offers']);
  }
}
