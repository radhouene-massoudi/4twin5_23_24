import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products:any;
  Showupdate=false;
  producttoupdate:any;
constructor(private s:ProductService){

}
ngOnInit(){
  this.s.fetchProducts().subscribe(
    (result)=>{
this.products=result;
    }
  )
}
showForm(product:any){
  this.producttoupdate=product;
  this.Showupdate=true;
}

afterrecieveData(e:any){
this.Showupdate=false;
}
}
