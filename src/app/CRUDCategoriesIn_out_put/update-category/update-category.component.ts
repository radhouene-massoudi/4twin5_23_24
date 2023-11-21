import { Component, Input } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
@Input()categorytoUpdate !:Category;
  constructor(private s:CategoryService){

  }
  Update(f:any){
this.s.updateCat(f,this.categorytoUpdate.id).subscribe(
  ()=>{
    alert('updated')
  }
);

  }
}
