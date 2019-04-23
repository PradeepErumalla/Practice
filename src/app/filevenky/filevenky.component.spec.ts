import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilevenkyComponent } from './filevenky.component';

describe('FilevenkyComponent', () => {
  let component: FilevenkyComponent;
  let fixture: ComponentFixture<FilevenkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilevenkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilevenkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
