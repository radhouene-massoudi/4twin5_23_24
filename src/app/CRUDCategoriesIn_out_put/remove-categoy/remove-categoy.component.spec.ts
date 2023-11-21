import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCategoyComponent } from './remove-categoy.component';

describe('RemoveCategoyComponent', () => {
  let component: RemoveCategoyComponent;
  let fixture: ComponentFixture<RemoveCategoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCategoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCategoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
