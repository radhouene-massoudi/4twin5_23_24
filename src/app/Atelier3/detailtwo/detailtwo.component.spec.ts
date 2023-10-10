import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtwoComponent } from './detailtwo.component';

describe('DetailtwoComponent', () => {
  let component: DetailtwoComponent;
  let fixture: ComponentFixture<DetailtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
