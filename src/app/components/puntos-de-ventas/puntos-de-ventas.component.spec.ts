import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDeVentasComponent } from './puntos-de-ventas.component';

describe('PuntosDeVentasComponent', () => {
  let component: PuntosDeVentasComponent;
  let fixture: ComponentFixture<PuntosDeVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosDeVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosDeVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
