import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: product[] = []

  ngOnInit(): void {
    this.products = [
      {id:1, title:"item1", price:"5$"},
      {id:2, title:"item2", price:"10$"},
      {id:3, title:"item3", price:"1$"},
      {id:4, title:"item4", price:"50$"}
    ]
  }
}
