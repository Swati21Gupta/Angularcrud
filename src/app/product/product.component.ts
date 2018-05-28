import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  constructor(private ps: ProductService) { }

  ngOnInit() {
  }

  getAllProducts(): Array<Product> {
    return this.ps.getProducts();
  }
  removeProduct(id: String) {
    this.ps.deleteProduct(id);
  }
}
