import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VModel} from "../models/vModel";
import {BrandService} from "./brand-service";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private modelsUrl: string;

  constructor(private http: HttpClient, private brandService: BrandService) {
    this.modelsUrl = 'http://localhost:8080/models';
  }

  public findAll(): Observable<VModel[]> {
    return this.http.get<VModel[]>(this.modelsUrl)
  }

  public save(vModel: VModel) {
    return this.http.post<VModel>(this.modelsUrl + '/add', vModel);
  }

  public prepareAddModelData() {
    return this.brandService.findAll();
  }
}
