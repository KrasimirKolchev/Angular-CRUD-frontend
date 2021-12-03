import { Component, OnInit } from '@angular/core';
import {VModel} from "../../models/vModel";
import {ActivatedRoute, Router} from "@angular/router";
import {ModelService} from "../../services/model-service";
import {Brand} from "../../models/brand";
import {Observable} from "rxjs";

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {
  vModel: VModel;
  brands: Observable<Brand[]> | undefined;
  categories: Array<String> = [];

  constructor(private route: ActivatedRoute, private router: Router, private modelService: ModelService) {
    this.vModel = new VModel();
  }

  ngOnInit(): void {
    this.brands = this.modelService.prepareAddModelData();
    this.categories = ['Car', 'Truck', 'Motorcycle', 'Bus'];
  }

  onSubmit() {
    this.modelService.save(this.vModel).subscribe(res => this.gotoModels());
  }

  private gotoModels() {
    this.router.navigate(['/models']);
  }
}
