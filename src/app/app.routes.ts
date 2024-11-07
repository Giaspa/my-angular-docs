import { Routes } from '@angular/router';
import { RoutingComponent } from './features/routing/routing.component';
import { Route1Component } from './features/routing/route1/route1.component';
import { Route2Component } from './features/routing/route2/route2.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { ChangeDetectionComponent } from './features/change-detection/change-detection.component';
import { DependencyInjectionComponent } from './features/dependency-injection/dependency-injection.component';
import { StateManagementComponent } from './features/state-management/state-management.component';
import { FormsComponent } from './features/forms/forms.component';
import { TestingComponent } from './features/testing/testing.component';
import { PerformanceComponent } from './features/performance/performance.component';

export const routes: Routes = [
  { path: 'home', redirectTo: '/data-binding', pathMatch: 'full' },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  {
    path: 'routing', component: RoutingComponent, children: [
      { path: 'route1', component: Route1Component },
      { path: 'route2', component: Route2Component }
    ]
  },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: 'state-management', component: StateManagementComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: '**', redirectTo: '/data-binding'},
];
