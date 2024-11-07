import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocalStateService } from './sm-service/local-state.service';
import { decrement, increment } from './sm-utils/counter.actions';
import { ContainerMaskComponent } from "../../components/container-mask/container-mask.component";
import { ContainerMaskMiniComponent } from '../../components/container-mask-mini/container-mask-mini.component';

@Component({
  selector: 'app-state-management',
  standalone: true,
  imports: [CommonModule, ContainerMaskComponent, ContainerMaskMiniComponent],
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {
  codeExample=`
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


    //ACTIONS
    export const increment = createAction('[Counter] Increment');
    export const decrement = createAction('[Counter] Decrement');


    //REDUCER
    export const initialState = 0;

    const _counterReducer = createReducer(
      initialState,
      on(increment, (state) => state + 1),
      on(decrement, (state) => state - 1)
    );

    export function counterReducer(state: any, action: any) {
      return _counterReducer(state, action);
    }


    @Component({
      selector: 'app-state-management',
      standalone: true,
      imports: [CommonModule],
      template: \`
        <p>Questo esempio mostra la gestione dello stato locale con RxJS e uno stato globale con NgRx.</p>

        <article>
          <h2 class="text-2xl font-semibold">Stato Locale (Contatore)</h2>
          <p class="text-xl">Contatore: {{ counter | async }}</p>

          <div class="flex flex-row gap-8">
            <button class="btn btn-outline btn-primary" (click)="incrementLocal()">Incrementa</button>
            <button class="btn btn-outline btn-secondary" (click)="decrementLocal()">Decrementa</button>
          </div>
        </article>

        <div class="divider">OR</div>

        <article>
          <h2 class="text-2xl font-semibold">Stato Globale (Contatore con NgRx)</h2>
          <p class="text-xl">Contatore Globale: {{ globalCounter$ | async }}</p>

          <div class="flex flex-row gap-8">
            <button class="btn btn-outline btn-primary" (click)="incrementGlobal()">Incrementa</button>
            <button class="btn btn-outline btn-secondary" (click)="decrementGlobal()">Decrementa</button>
          </div>
        </article>
      \`
    })
    export class StateManagementComponent {
      counter = this.localStateService.counter$;
      globalCounter$: Observable<number>;

      constructor(
        private localStateService: LocalStateService,
        private store: Store<{ counter: number }>
      ) {
        this.globalCounter$ = this.store.select('counter');
      }

      incrementLocal() {
        this.localStateService.increment();
      }

      decrementLocal() {
        this.localStateService.decrement();
      }

      incrementGlobal() {
        this.store.dispatch(increment());
      }

      decrementGlobal() {
        this.store.dispatch(decrement());
      }
    }
  `
  counter = this.localStateService.counter$;
  globalCounter$: Observable<number>;

  constructor(
    private localStateService: LocalStateService,
    private store: Store<{ counter: number }>
  ) {
    this.globalCounter$ = this.store.select('counter');
  }

  incrementLocal() {
    this.localStateService.increment();
  }

  decrementLocal() {
    this.localStateService.decrement();
  }

  incrementGlobal() {
    this.store.dispatch(increment());
  }

  decrementGlobal() {
    this.store.dispatch(decrement());
  }
}
