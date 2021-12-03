import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosVentasMxComponent } from './puntos-ventas-mx.component';

describe('PuntosVentasMxComponent', () => {
  let component: PuntosVentasMxComponent;
  let fixture: ComponentFixture<PuntosVentasMxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosVentasMxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosVentasMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
