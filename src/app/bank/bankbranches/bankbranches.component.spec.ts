import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankbranchesComponent } from './bankbranches.component';

describe('BankbranchesComponent', () => {
  let component: BankbranchesComponent;
  let fixture: ComponentFixture<BankbranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankbranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
