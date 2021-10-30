import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberListaComponent } from './contas-receber-lista.component';

describe('ContasReceberListaComponent', () => {
  let component: ContasReceberListaComponent;
  let fixture: ComponentFixture<ContasReceberListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasReceberListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReceberListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
