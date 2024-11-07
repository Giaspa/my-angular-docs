import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  getData() {
    return 'Dati forniti dal servizio!';
  }
}
