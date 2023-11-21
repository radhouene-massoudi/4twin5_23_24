import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent implements OnChanges {

@Input()productin:any;
@Output()msg=new EventEmitter();



sendDataToParent(p:any){
this.msg.emit(p)
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}
}
