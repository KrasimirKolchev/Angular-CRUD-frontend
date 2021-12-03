import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Brand} from "../models/brand";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private brandsUrl: string;

  constructor(private http: HttpClient) {
    this.brandsUrl = 'http://localhost:8080/brands';
  }

  public findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.brandsUrl)
  }

  public save(brand: Brand) {
    return this.http.post<Brand>(this.brandsUrl + '/add', brand);
  }
}
