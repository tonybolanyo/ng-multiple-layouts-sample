import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSamplePageComponent } from './front-sample-page.component';

describe('FrontSamplePageComponent', () => {
  let component: FrontSamplePageComponent;
  let fixture: ComponentFixture<FrontSamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
