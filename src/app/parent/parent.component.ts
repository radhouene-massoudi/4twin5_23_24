import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
ngAfterViewInit(): void {
  console.log(this.c.klass)
}

@ViewChild(ChildComponent)private c!:ChildComponent;
ngOnInit(): void {
  
}
}
