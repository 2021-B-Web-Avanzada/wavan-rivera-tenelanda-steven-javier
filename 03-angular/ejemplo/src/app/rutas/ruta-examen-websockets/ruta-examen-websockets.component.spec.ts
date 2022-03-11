import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaExamenWebsocketsComponent } from './ruta-examen-websockets.component';

describe('RutaExamenWebsocketsComponent', () => {
  let component: RutaExamenWebsocketsComponent;
  let fixture: ComponentFixture<RutaExamenWebsocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaExamenWebsocketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaExamenWebsocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
