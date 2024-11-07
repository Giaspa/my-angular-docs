import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStateService {
  // Comportamento di contatore inizializzato a 0
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
}
