import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPantallaPrincipalComponent } from './ruta-pantalla-principal.component';

describe('RutaPantallaPrincipalComponent', () => {
  let component: RutaPantallaPrincipalComponent;
  let fixture: ComponentFixture<RutaPantallaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPantallaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPantallaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
