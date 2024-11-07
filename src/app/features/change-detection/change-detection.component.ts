import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContainerMaskComponent } from '../../components/container-mask/container-mask.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ContainerMaskComponent, CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  @Input() message = 'Iniziale';
  exampleCode = `
    import { Component, ChangeDetectionStrategy } from '@angular/core';

    @Component({
      selector: 'app-change-detection',
      standalone: true,
      template: \`
        <h1>Change Detection</h1>
        <p>Questo esempio utilizza Change Detection con la strategia OnPush.</p>
        <p>Valore: {{ value }}</p>
        <button (click)="increment()">Incrementa</button>
      \`,
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class ChangeDetectionComponent {
      value = 0;

      increment() {
        this.value++;
      }
    }
  `;

  changeMessage() {
    this.message === 'Updated!' ? this.message = 'Iniziale' : this.message = 'Updated!';
  }
}
