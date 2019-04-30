import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBannerComponent } from './head-banner.component';

describe('HeadBannerComponent', () => {
  let component: HeadBannerComponent;
  let fixture: ComponentFixture<HeadBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
