import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
id:any;
  constructor(private activatedroute:ActivatedRoute,private service:UserService){
}
ngOnInit(){
  this.id=this.activatedroute.snapshot.params['id'];
this.service.fetchUserById(this.id).subscribe(
  (data)=>{
    console.log("user by id",data);
  }
)

  console.log(this.activatedroute.snapshot.queryParams['classe'])
console.log(this.activatedroute.snapshot.params['id'])
//console.log(this.activatedroute.snapshot.params['name'])
this.activatedroute.params.subscribe(
  (d)=>console.log(d)
);

}
}
