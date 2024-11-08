import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/features/state-management/sm-utils/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ counter: counterReducer })
  ]
})
  .catch(err => console.error(err));
