import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private URL = "http://localhost:8080/api/v1/products";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.URL}`);
  }
}