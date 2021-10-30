import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensDeServicoListaComponent } from './ordens-de-servico-lista.component';

describe('OrdensDeServicoListaComponent', () => {
  let component: OrdensDeServicoListaComponent;
  let fixture: ComponentFixture<OrdensDeServicoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensDeServicoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensDeServicoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
