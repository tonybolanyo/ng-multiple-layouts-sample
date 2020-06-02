import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSamplePageComponent } from './back-sample-page.component';

describe('BackSamplePageComponent', () => {
  let component: BackSamplePageComponent;
  let fixture: ComponentFixture<BackSamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackSamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
