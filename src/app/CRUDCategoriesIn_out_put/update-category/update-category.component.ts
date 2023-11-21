import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
@Input()categorytoUpdate !:Category;
@Output()notif=new EventEmitter();
  constructor(private s:CategoryService){

  }
  Update(f:any){
this.s.updateCat(f,this.categorytoUpdate.id).subscribe(
  ()=>{
  this.notif.emit('updted');
  }
);

  }
}
