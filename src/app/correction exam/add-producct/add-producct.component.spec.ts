import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducctComponent } from './add-producct.component';

describe('AddProducctComponent', () => {
  let component: AddProducctComponent;
  let fixture: ComponentFixture<AddProducctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProducctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProducctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
