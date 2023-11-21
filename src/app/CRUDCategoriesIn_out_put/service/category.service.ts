import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseUrl="http://localhost:3000/categories/"
  constructor(private http:HttpClient) { }
  getAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl)
  }
  updateCat(data:any,id:any){
    return this.http.put<Category>(this.baseUrl+id,data);
  }
}
