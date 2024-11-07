import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { ChangeDetectionComponent } from './features/change-detection/change-detection.component';
import { RoutingComponent } from './features/routing/routing.component';
import { DependencyInjectionComponent } from './features/dependency-injection/dependency-injection.component';
import { StateManagementComponent } from './features/state-management/state-management.component';
import { FormsComponent } from './features/forms/forms.component';
import { TestingComponent } from './features/testing/testing.component';
import { PerformanceComponent } from './features/performance/performance.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: 'state-management', component: StateManagementComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: '', redirectTo: '/data-binding', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
