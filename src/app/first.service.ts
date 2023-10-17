import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
tab=['a','b'];
  constructor() { }

  sayHello(){
    console.log('bonjour');
  }
  addElementToTab(el:any){
    this.tab.push(el)
  }
  showTab(){
    console.log(this.tab)
  }
}
