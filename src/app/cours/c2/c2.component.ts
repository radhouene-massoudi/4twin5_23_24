import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers:[FirstService]
})
export class C2Component implements OnInit {
constructor(private s2:FirstService){

}
ngOnInit(): void {
    this.s2.showTab();
}
}
