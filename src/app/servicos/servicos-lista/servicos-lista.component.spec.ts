import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosListaComponent } from './servicos-lista.component';

describe('ServicosListaComponent', () => {
  let component: ServicosListaComponent;
  let fixture: ComponentFixture<ServicosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
