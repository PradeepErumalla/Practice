import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoestypesComponent } from './shoestypes.component';

describe('ShoestypesComponent', () => {
  let component: ShoestypesComponent;
  let fixture: ComponentFixture<ShoestypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoestypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoestypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
