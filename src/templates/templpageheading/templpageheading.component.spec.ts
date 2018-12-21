import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplpageheadingComponent } from './templpageheading.component';

describe('TemplpageheadingComponent', () => {
  let component: TemplpageheadingComponent;
  let fixture: ComponentFixture<TemplpageheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplpageheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplpageheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
