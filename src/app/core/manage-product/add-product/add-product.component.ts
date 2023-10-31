import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
p=new Product();
  constructor(private s:ProductService){

  }

  showF(f:any){
    console.log("show f", f);
  }
  addProduct(data:Product){
    this.s.addProduct(data).subscribe(
      ()=>{
        alert('Added Successfully');
      }
    );
  }
}
