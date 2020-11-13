import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConfirmarCorreoComponent } from './pagina-confirmar-correo.component';

describe('PaginaConfirmarCorreoComponent', () => {
  let component: PaginaConfirmarCorreoComponent;
  let fixture: ComponentFixture<PaginaConfirmarCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaConfirmarCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaConfirmarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
