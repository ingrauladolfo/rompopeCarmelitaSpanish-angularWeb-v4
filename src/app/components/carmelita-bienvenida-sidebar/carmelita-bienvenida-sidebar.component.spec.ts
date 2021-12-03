import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitaBienvenidaSidebarComponent } from './carmelita-bienvenida-sidebar.component';

describe('CarmelitaBienvenidaSidebarComponent', () => {
  let component: CarmelitaBienvenidaSidebarComponent;
  let fixture: ComponentFixture<CarmelitaBienvenidaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitaBienvenidaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitaBienvenidaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
