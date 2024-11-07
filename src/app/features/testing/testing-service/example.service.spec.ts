import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService);
  });

  it('dovrebbe restituire un messaggio asincrono', (done: DoneFn) => {
    service.getMessageAsync().pipe(take(1)).subscribe((message) => {
      expect(message).toBe('Hello from async service!');
      done(); // Indica che il test è completo
    });
  });
});
