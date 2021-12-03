import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaRecetasComponent } from './galeria-recetas.component';

describe('GaleriaRecetasComponent', () => {
  let component: GaleriaRecetasComponent;
  let fixture: ComponentFixture<GaleriaRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
