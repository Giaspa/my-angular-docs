import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerMaskComponent } from "../../components/container-mask/container-mask.component";
import { DoublePipe } from './pipe/double.pipe';
import { ContainerMaskMiniComponent } from '../../components/container-mask-mini/container-mask-mini.component';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [DoublePipe, ContainerMaskComponent, ContainerMaskMiniComponent],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent {
  codeExample = `
    @Pipe({
      name: 'double',
      standalone: true
    })
    export class DoublePipe implements PipeTransform {
      transform(value: number): number {
        console.log('Pipe "double" eseguita'); // Questo aiuta a tracciare quando la pipe viene eseguita
        return value * 2;
      }
    }


    @Component({
      selector: 'app-performance',
      standalone: true,
      imports: [DoublePipe, ContainerMaskComponent, ContainerMaskMiniComponent],
      template:\`
        <p>Questo esempio dimostra l'uso di lazy loading, Change Detection OnPush, e una pipe pura.</p>

        <button (click)="increment()">Incrementa</button>

        <article>
          <h2>Change Detection con OnPush</h2>
          <p>Contatore: {{ counter }}</p>
        </article>


        <article>
          <h2>Pipe Pura</h2>
          <p>Valore raddoppiato: {{ counter | double }}</p>
        </article>
      \`,
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class PerformanceComponent {
      counter = 0;

      increment() {
        this.counter++;
      }
    }
  `;

  counter = 0;

  increment() {
    this.counter++;
  }
}
