import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensDeServicoFormComponent } from './ordens-de-servico-form.component';

describe('OrdensDeServicoFormComponent', () => {
  let component: OrdensDeServicoFormComponent;
  let fixture: ComponentFixture<OrdensDeServicoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensDeServicoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensDeServicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
