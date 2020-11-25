import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAdminComponent } from './painel-admin.component';

describe('PainelAdminComponent', () => {
  let component: PainelAdminComponent;
  let fixture: ComponentFixture<PainelAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
