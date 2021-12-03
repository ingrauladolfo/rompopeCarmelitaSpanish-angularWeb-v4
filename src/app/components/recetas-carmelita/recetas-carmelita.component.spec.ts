import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasCarmelitaComponent } from './recetas-carmelita.component';

describe('RecetasCarmelitaComponent', () => {
  let component: RecetasCarmelitaComponent;
  let fixture: ComponentFixture<RecetasCarmelitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasCarmelitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasCarmelitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
