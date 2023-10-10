import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprodductComponent } from './updateprodduct.component';

describe('UpdateprodductComponent', () => {
  let component: UpdateprodductComponent;
  let fixture: ComponentFixture<UpdateprodductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprodductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprodductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
