import { TestBed } from '@angular/core/testing';

import { GroceryServiceService } from './grocery-service.service';

describe('GroceryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceryServiceService = TestBed.get(GroceryServiceService);
    expect(service).toBeTruthy();
  });
});
