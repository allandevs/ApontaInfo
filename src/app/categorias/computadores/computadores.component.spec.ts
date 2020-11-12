import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadoresComponent } from './computadores.component';

describe('ComputadoresComponent', () => {
  let component: ComputadoresComponent;
  let fixture: ComponentFixture<ComputadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
