import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../models/offer";
import {Observable} from "rxjs";
import {ModelService} from "./model-service";

@Injectable({providedIn: 'root'})
export class OfferService {
  private offersUrl: string;

  constructor(private http: HttpClient, private modelService: ModelService) {
    this.offersUrl = 'http://localhost:8080/offers';
  }

  public findAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offersUrl);
  }

  public createOffer(offer: Offer): Observable<Object> {
    return this.http.post(this.offersUrl + '/add', offer);
  }

  public prepareAddOfferData() {
    return this.modelService.findAll();
  }

  deleteOffer(id: string): Observable<any> {
    return this.http.delete(`${this.offersUrl}/delete/${id}`);
  }

  updateOffer(id: string, offer: any): Observable<any> {
    return this.http.put(`${this.offersUrl}/update/${id}`, offer);
  }

  getOffer(id: string): Observable<any> {
    return this.http.get(`${this.offersUrl}/${id}`);
  }
}
