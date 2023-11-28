import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-producct',
  templateUrl: './add-producct.component.html',
  styleUrls: ['./add-producct.component.css']
})
export class AddProducctComponent {
  constructor( private fb:FormBuilder,private s:ProductService ){

  }
  addProductfrom=this.fb.group({
    name:['',[Validators.required]],
    price:['',[Validators.pattern('[0-9]*')]],
    description:['',[Validators.minLength(10)]],
  })
save(){
  this.s.addProduct(this.addProductfrom.value).subscribe(
    ()=>{
      alert("Added Successfully");
    }
  );
}
}
