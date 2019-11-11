import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  products;
  constructor(public productservice: ProductlistService) {
    this.products = this.productservice.getProducts();
  }
  ngOnInit() {
  }
}
