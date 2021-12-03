import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentosCarmelitaComponent } from './momentos-carmelita.component';

describe('MomentosCarmelitaComponent', () => {
  let component: MomentosCarmelitaComponent;
  let fixture: ComponentFixture<MomentosCarmelitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentosCarmelitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentosCarmelitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
