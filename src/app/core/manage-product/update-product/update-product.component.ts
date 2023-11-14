import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
@Input()p:any;
@Output()sendmsg=new EventEmitter();


sendDataToParent(){
  this.sendmsg.emit('bonjour');
}
}
