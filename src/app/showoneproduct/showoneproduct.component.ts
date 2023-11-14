import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent {
@Input()productin:any;
@Output()msg=new EventEmitter();



sendDataToParent(p:any){
this.msg.emit(p)
}
}
