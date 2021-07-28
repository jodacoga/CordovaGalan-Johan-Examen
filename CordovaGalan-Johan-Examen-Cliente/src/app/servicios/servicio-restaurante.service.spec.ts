import { TestBed } from '@angular/core/testing';

import { ServicioRestauranteService } from './servicio-restaurante.service';

describe('ServicioRestauranteService', () => {
  let service: ServicioRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
