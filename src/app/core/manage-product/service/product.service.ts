import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: any): Observable<Product> {
    return this.http.post<Product>("http://localhost:3000/product", data);
  }
  updateProduct(data: any, id: any) {
    return this.http.put("http://localhost:3000/product/" + id, data)
  }
  fetchProducts() {
    return this.http.get("http://localhost:3000/product/")
  }
}
