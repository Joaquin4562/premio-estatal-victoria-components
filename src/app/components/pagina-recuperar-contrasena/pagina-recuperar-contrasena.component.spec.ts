import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRecuperarContrasenaComponent } from './pagina-recuperar-contrasena.component';

describe('PaginaRecuperarContrasenaComponent', () => {
  let component: PaginaRecuperarContrasenaComponent;
  let fixture: ComponentFixture<PaginaRecuperarContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRecuperarContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRecuperarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
