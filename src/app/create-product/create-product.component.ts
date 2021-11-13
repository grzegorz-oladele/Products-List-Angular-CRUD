import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
