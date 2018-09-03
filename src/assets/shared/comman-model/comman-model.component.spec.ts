import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanModelComponent } from './comman-model.component';

describe('CommanModelComponent', () => {
  let component: CommanModelComponent;
  let fixture: ComponentFixture<CommanModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
