import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesComponent } from './celulares.component';

describe('CelularesComponent', () => {
  let component: CelularesComponent;
  let fixture: ComponentFixture<CelularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
