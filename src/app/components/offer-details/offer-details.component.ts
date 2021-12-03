import {Component, OnInit} from '@angular/core';
import {Offer} from "../../models/offer";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../../services/offer-service";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  id: string = '';
  offer: Offer = new Offer();

  constructor(private route: ActivatedRoute, private router: Router, private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offer = new Offer();

    this.offerService.getOffer(this.id).subscribe(data => {this.offer = data}, (error) => console.log(error));
  }

  offers() {
    this.router.navigate(['/offers']);
  }

}
