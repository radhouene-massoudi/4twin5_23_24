import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
klass="4TWIN5"
Q=40;
kolor='red';
sayHello(){
  console.log('hello')
}
getColor(){
  if(this.Q<10){return 'pink';}
  else{
    return 'green';
  }
  
}
changeColor(k:any){
  this.kolor=k;
}
}
