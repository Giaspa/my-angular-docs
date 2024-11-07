import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerMaskComponent } from "../../components/container-mask/container-mask.component";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ContainerMaskComponent],
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  message = 'Hello, Angular!';

  codeExample = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-data-binding',
      standalone: true,
      template: \`
        <p>Messaggio interpolato: {{ message }}</p>

        <p>Property Binding:</p>
        <input [value]="message" readonly>

        <p>Event Binding:</p>
        <button (click)="onButtonClick()">Clicca per aggiornare il messaggio</button>

        <p>Two-way Binding:</p>
        <input [(ngModel)]="message">
      \`,
    })
    export class DataBindingComponent {
      message = 'Hello, Angular!';

      onButtonClick() {
        this.message = 'Messaggio aggiornato!';
      }
    }
  `;

  onButtonClick() {
    this.message = 'Messaggio aggiornato!';
  }
}
