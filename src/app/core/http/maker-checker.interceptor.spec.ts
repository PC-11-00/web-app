import { TestBed } from '@angular/core/testing';

import { MakerCheckerInterceptor } from './maker-checker.interceptor';

describe('MakerCheckerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MakerCheckerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MakerCheckerInterceptor = TestBed.inject(MakerCheckerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
