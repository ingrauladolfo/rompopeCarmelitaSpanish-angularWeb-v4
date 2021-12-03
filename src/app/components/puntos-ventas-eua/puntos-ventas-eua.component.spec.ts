import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosVentasEuaComponent } from './puntos-ventas-eua.component';

describe('PuntosVentasEuaComponent', () => {
  let component: PuntosVentasEuaComponent;
  let fixture: ComponentFixture<PuntosVentasEuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosVentasEuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosVentasEuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
