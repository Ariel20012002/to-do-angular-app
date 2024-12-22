import { TestBed } from '@angular/core/testing';

import { TareaApiService } from './tarea-api.service';

describe('TareaApiService', () => {
  let service: TareaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
