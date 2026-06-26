import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramGallery } from './instagram-gallery';

describe('InstagramGallery', () => {
  let component: InstagramGallery;
  let fixture: ComponentFixture<InstagramGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
