import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromuser',
  templateUrl: './fromuser.component.html',
  styleUrls: ['./fromuser.component.css']
})
export class FromuserComponent {

  constructor(private fb:FormBuilder){

  }
formUser=this.fb.group({
  firstname:['',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]],
  lastname:[''],
  brithday:[''],
  email:[''],
  pwd:[''],
  profession:[''],
  customerCategory:['Customer'],
});
 checkCategory(){
  let cat=this.formUser.get('customerCategory')?.value;

  if (cat=='Customer' && this.formUser.valid){
    console.log(cat)
    
    return true;
  }
  
  else{
   return false;
}
}
}
