import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:any){
return this.http.post('http://localhost:3000/product/',data)
  }
  fetchProducts(){
    return this.http.get('http://localhost:3000/product/')
  }
  addCart(data:any){
return this.http.post('http://localhost:3000/cart/',data)
  }
  fetchcarts(){
    return this.http.get('http://localhost:3000/cart/')
  }
  fetchProductIncarts(id:any){
    return this.http.get('http://localhost:3000/cart/'+id)
  }
  fetchProductInproduct(id:any){
    return this.http.get('http://localhost:3000/product/'+id)
  }
}
