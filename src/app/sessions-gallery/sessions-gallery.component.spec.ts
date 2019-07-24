import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsGalleryComponent } from './sessions-gallery.component';

describe('SessionsGalleryComponent', () => {
  let component: SessionsGalleryComponent;
  let fixture: ComponentFixture<SessionsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
