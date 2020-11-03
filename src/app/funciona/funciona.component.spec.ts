import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionaComponent } from './funciona.component';

describe('FuncionaComponent', () => {
  let component: FuncionaComponent;
  let fixture: ComponentFixture<FuncionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
