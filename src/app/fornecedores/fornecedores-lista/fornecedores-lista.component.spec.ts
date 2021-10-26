import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresListaComponent } from './fornecedores-lista.component';

describe('FornecedoresListaComponent', () => {
  let component: FornecedoresListaComponent;
  let fixture: ComponentFixture<FornecedoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
