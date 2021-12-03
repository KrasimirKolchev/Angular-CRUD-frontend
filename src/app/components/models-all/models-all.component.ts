import { Component, OnInit } from '@angular/core';
import {VModel} from "../../models/vModel";
import {ModelService} from "../../services/model-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-models-all',
  templateUrl: './models-all.component.html',
  styleUrls: ['./models-all.component.css']
})
export class ModelsAllComponent implements OnInit {
  models: Array<VModel> = [];

  constructor(private modelService: ModelService, private router: Router) { }

  ngOnInit(): void {
    this.modelService.findAll().subscribe(data => {this.models = data})
  }

  addModel() {
    this.router.navigate(['/models/add']);
  }
}
