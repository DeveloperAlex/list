import { TestBed, inject } from '@angular/core/testing';

import { NodejsService } from './nodejs.service';

describe('NodejsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodejsService]
    });
  });

  it('should ...', inject([NodejsService], (service: NodejsService) => {
    expect(service).toBeTruthy();
  }));
});
