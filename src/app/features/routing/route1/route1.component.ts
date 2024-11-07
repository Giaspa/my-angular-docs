import { Component } from '@angular/core';
import { ContainerMaskMiniComponent } from '../../../components/container-mask-mini/container-mask-mini.component';

@Component({
  selector: 'app-route1',
  standalone: true,
  imports: [ContainerMaskMiniComponent],
  template: `
    <app-container-mask-mini>
        <h2>Route 1</h2>

        <p>Contenuto della Route 1.</p>
    </app-container-mask-mini>
  `
})
export class Route1Component { }
