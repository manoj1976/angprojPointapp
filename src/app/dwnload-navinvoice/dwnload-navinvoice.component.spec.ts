import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwnloadNAVInvoiceComponent } from './dwnload-navinvoice.component';

describe('DwnloadNAVInvoiceComponent', () => {
  let component: DwnloadNAVInvoiceComponent;
  let fixture: ComponentFixture<DwnloadNAVInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwnloadNAVInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwnloadNAVInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
