import { TestBed } from '@angular/core/testing';

import { DogsImagesService } from './dogs-images.service';

describe('DogsImagesService', () => {
  let service: DogsImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
