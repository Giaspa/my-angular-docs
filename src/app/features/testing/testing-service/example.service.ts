import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  getMessage(): string {
    return 'Hello from ExampleService!';
  }

  getMessageAsync() {
    return of('Hello from async service!'); // Restituisce un Observable
  }
}
