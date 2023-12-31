import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

  nameOfProduct='';
  listProducts:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 10, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 33, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
    increaseLike(p:any){
//console.log(p);
//let index=this.listProducts.indexOf(p);
this.listProducts[p].like++;
    }
    constructor(private router:Router){

    }
    ngOnInit(): void {
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        
    }
    goTocomponentDetail(idofproduct:any){
this.router.navigate(['user/detail/',idofproduct])
    }
}
