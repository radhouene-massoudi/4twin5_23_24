import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any;
  constructor(private s:ProductService,private router:Router){

  }
  ngOnInit(){
this.s.fetchProducts().subscribe(
  (data)=>{
this.products=data;
  }
);
  }
  addToCart(produit:any){
    this.s.fetchProductIncarts(produit.id).subscribe(
      (res)=>{
        if (res!=null){
          alert("Produit existe au panier");
        }else{
          this.s.addCart(produit).subscribe(
            ()=>{
              alert("Produit ajouté au panier");
            }
          )
        }
      }
    )
   ;
  }
navigateTODetail(id:any){
  this.router.navigate(['/detail/'+id])
}
}
