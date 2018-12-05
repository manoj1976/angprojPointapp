import { TestBed } from '@angular/core/testing';

import { Servicesdata.ServiceService } from './servicesdata.service.service';

describe('Servicesdata.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Servicesdata.ServiceService = TestBed.get(Servicesdata.ServiceService);
    expect(service).toBeTruthy();
  });
});
