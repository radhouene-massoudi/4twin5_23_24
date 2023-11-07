import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromuserComponent } from './fromuser.component';

describe('FromuserComponent', () => {
  let component: FromuserComponent;
  let fixture: ComponentFixture<FromuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
