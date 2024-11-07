import { Component } from '@angular/core';
import { ContainerMaskMiniComponent } from '../../../components/container-mask-mini/container-mask-mini.component';

@Component({
  selector: 'app-route2',
  standalone: true,
  imports: [ContainerMaskMiniComponent],
  template: `
    <app-container-mask-mini>
        <h2>Route 2</h2>

        <p>Contenuto della Route 2.</p>
    </app-container-mask-mini>
  `
})
export class Route2Component { }
