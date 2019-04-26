import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBIVMDComponent } from './sbi-vmd.component';

describe('SBIVMDComponent', () => {
  let component: SBIVMDComponent;
  let fixture: ComponentFixture<SBIVMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBIVMDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBIVMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
