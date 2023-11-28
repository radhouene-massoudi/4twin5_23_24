import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
product:any;
  constructor(private s:ProductService,private ac:ActivatedRoute,private router:Router){

}
ngOnInit(){
  this.s.fetchProductInproduct(this.ac.snapshot.params['id']).subscribe(
    (data)=>{
      this.product=data
    },
    (error)=>{
this.router.navigate(['/notfound'])
    }
  )
}
}
