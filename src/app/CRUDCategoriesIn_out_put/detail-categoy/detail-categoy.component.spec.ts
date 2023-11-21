import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCategoyComponent } from './detail-categoy.component';

describe('DetailCategoyComponent', () => {
  let component: DetailCategoyComponent;
  let fixture: ComponentFixture<DetailCategoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCategoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCategoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
