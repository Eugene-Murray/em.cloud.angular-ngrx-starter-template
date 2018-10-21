import { TestBed, inject } from '@angular/core/testing';

import {CurrentPostCodeService} from './current-postcode.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('CurrentPostCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentPostCodeService], imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CurrentPostCodeService], (service: CurrentPostCodeService) => {
    expect(service).toBeTruthy();
  }));
});
