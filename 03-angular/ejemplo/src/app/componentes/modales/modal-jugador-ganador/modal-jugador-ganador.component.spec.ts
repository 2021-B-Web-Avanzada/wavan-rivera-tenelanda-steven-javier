import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJugadorGanadorComponent } from './modal-jugador-ganador.component';

describe('ModalJugadorGanadorComponent', () => {
  let component: ModalJugadorGanadorComponent;
  let fixture: ComponentFixture<ModalJugadorGanadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJugadorGanadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJugadorGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
