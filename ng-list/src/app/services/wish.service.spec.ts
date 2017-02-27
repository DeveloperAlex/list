import { TestBed, inject } from '@angular/core/testing';

import { WishService } from './wish.service';

describe('WishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishService]
    });
  });

  it('should ...', inject([WishService], (service: WishService) => {
    expect(service).toBeTruthy();
  }));
});
