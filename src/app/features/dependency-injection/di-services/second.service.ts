import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {
  getMessage() {
    return 'Dati forniti dal Secondo Servizio!';
  }
}
