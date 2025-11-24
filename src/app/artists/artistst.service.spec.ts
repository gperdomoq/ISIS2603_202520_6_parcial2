/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtiststService } from './artistst.service';

describe('Service: Artistst', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtiststService]
    });
  });

  it('should ...', inject([ArtiststService], (service: ArtiststService) => {
    expect(service).toBeTruthy();
  }));
});
