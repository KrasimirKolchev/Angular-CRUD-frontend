import { Component, OnInit } from '@angular/core';
import {Brand} from "../../models/brand";
import {BrandService} from "../../services/brand-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-brands-all',
  templateUrl: './brands-all.component.html',
  styleUrls: ['./brands-all.component.css']
})
export class BrandsAllComponent implements OnInit {
  brands: Array<Brand> = [];

  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.brandService.findAll().subscribe(data => {this.brands = data});
  }

  addBrand() {
    this.router.navigate(['/brands/add']);
  }
}
