import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPeliculaComponent } from './banner-pelicula.component';

describe('BannerPeliculaComponent', () => {
  let component: BannerPeliculaComponent;
  let fixture: ComponentFixture<BannerPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
