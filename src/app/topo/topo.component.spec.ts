import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoComponent } from './topo.component';

describe('TopoComponent', () => {
  let component: TopoComponent;
  let fixture: ComponentFixture<TopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
