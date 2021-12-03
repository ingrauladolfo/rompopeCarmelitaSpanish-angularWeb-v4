import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSidebarComponent } from './media-sidebar.component';

describe('MediaSidebarComponent', () => {
  let component: MediaSidebarComponent;
  let fixture: ComponentFixture<MediaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
