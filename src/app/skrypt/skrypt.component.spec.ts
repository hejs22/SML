import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkryptComponent } from './skrypt.component';

describe('SkryptComponent', () => {
  let component: SkryptComponent;
  let fixture: ComponentFixture<SkryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkryptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
