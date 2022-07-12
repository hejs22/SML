import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WydarzeniaListComponent } from './wydarzenia-list.component';

describe('WydarzeniaListComponent', () => {
  let component: WydarzeniaListComponent;
  let fixture: ComponentFixture<WydarzeniaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WydarzeniaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WydarzeniaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
