import {Component, OnInit} from '@angular/core';
import {Offer} from "../../models/offer";
import {OfferService} from "../../services/offer-service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-offers-all',
  templateUrl: './offers-all.component.html',
  styleUrls: ['./offers-all.component.css']
})
export class OffersAllComponent implements OnInit {
  offers: Observable<Offer[]> | undefined;
  offer: Offer = new Offer();

  constructor(private offerService: OfferService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData() {
    this.offers = this.offerService.findAllOffers();
  }

  update(id: string) {
    this.router.navigate(['/offers/update', id]);
  }

  delete(id: string) {
    this.offerService.deleteOffer(id).subscribe(data => {
      this.reloadData();
    });
  }

  offerDetails(id: string) {
    this.router.navigate(['/offers/details', id]);
  }

  addOffer() {
    this.router.navigate(['/offers/add']);
  }
}
