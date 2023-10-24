import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements  OnInit{
  constructor(private userservice:UserService,
              private ac:ActivatedRoute,
              private router:Router) {
  }
ngOnInit(){
    this.userservice.removeUser(this.ac.snapshot.params['id']).subscribe(
      ()=>{
       this.router.navigate(['/lazy/user'])
        console.log('next')
      },
      (err)=>{
        //console.log('test',err.status)
        switch (err.status){
          case 500:alert('500');break;
          case 0:alert('0');break;
          case 401:alert('401');break;
        }
      },
      ()=>{
console.log('complete')
      }
    );
}
}
