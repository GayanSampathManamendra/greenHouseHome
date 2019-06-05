import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGallaryComponent } from './photo-gallary.component';

describe('PhotoGallaryComponent', () => {
  let component: PhotoGallaryComponent;
  let fixture: ComponentFixture<PhotoGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
