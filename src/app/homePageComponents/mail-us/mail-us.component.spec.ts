import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailUsComponent } from './mail-us.component';

describe('MailUsComponent', () => {
  let component: MailUsComponent;
  let fixture: ComponentFixture<MailUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
