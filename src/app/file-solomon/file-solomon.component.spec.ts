import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSolomonComponent } from './file-solomon.component';

describe('FileSolomonComponent', () => {
  let component: FileSolomonComponent;
  let fixture: ComponentFixture<FileSolomonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSolomonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSolomonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
