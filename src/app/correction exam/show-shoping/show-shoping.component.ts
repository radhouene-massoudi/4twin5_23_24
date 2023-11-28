import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show-shoping',
  templateUrl: './show-shoping.component.html',
  styleUrls: ['./show-shoping.component.css']
})
export class ShowShopingComponent {
  carts:any;
constructor(private s:ProductService){

}
ngOnInit(){
  this.s.fetchcarts().subscribe(
    (data)=>{
this.carts=data;
    }
  )
}
}
