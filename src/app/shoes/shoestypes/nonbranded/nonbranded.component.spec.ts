import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonbrandedComponent } from './nonbranded.component';

describe('NonbrandedComponent', () => {
  let component: NonbrandedComponent;
  let fixture: ComponentFixture<NonbrandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonbrandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonbrandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
