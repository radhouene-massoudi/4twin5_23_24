import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit{
  cats:Category[]=[];
  cattoup !:Category;
  showFormUpdate=false;
  constructor(private s:CategoryService) { }
  ngOnInit(): void {
    this.s.getAll().subscribe(
      (data)=>{
this.cats=data;
      }
    )
  }

showComponentForm(cat:any){
  this.showFormUpdate=true;
  this.cattoup=cat;
}
changeState(){
  this.showFormUpdate=false;
}
}
