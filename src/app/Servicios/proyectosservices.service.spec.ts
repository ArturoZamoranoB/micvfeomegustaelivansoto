import { TestBed } from '@angular/core/testing';

import { ProyectosservicesService } from './proyectosservices.service';

describe('ProyectosservicesService', () => {
  let service: ProyectosservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
