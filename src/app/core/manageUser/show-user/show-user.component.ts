import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit{
 users:any;
  constructor(private s:UserService){

  }
ngOnInit(): void {
    this.s.getUsers().subscribe(
      (result)=>{
       // console.log(result);
       this.users=result
      }
    );
   
}
}
