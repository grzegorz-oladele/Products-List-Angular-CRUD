import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  // @ts-ignore
  id: number;
  // @ts-ignore
  product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    })
  }

  onSubmit() {
    this.productService.updateProduct(this.id, this.product).subscribe(data => {
      this.goToProductList();
    })
  }

  goToProductList() {
    this.router.navigate(['/products'])
  }


}
