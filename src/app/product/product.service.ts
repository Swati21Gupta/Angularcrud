import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  prodList: Array<Product> = [
    new Product('stat001', 'pen'),
    new Product('stat002', 'pencil'),
    new Product('stat003', 'scale')
  ];

  public getProducts(): Array<Product> {
    return this.prodList;
  }
  public getProduct(id: String): Product {
    return this.prodList.filter(p => p.pId === id).pop();
  }

  public deleteProduct(id: String): void {
    this.prodList = this.prodList.filter(p => p.pId !== id);
  }
}
