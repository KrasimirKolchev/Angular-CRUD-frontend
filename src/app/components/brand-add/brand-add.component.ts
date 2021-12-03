import { Component, OnInit } from '@angular/core';
import {Brand} from "../../models/brand";
import {ActivatedRoute, Router} from "@angular/router";
import {BrandService} from "../../services/brand-service";

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brand: Brand;

  constructor(private route: ActivatedRoute, private router: Router, private brandService: BrandService) {
    this.brand = new Brand();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.brandService.save(this.brand).subscribe(res => this.gotoBrands());
  }

  private gotoBrands() {
    this.router.navigate(['/brands'])
  }
}
