import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarListaComponent } from './contas-pagar-lista.component';

describe('ContasPagarListaComponent', () => {
  let component: ContasPagarListaComponent;
  let fixture: ComponentFixture<ContasPagarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasPagarListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
