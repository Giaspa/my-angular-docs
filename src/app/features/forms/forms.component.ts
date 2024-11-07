import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContainerMaskComponent } from "../../components/container-mask/container-mask.component";
import { ContainerMaskMiniComponent } from '../../components/container-mask-mini/container-mask-mini.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ContainerMaskComponent, ContainerMaskMiniComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  codeExample = `
   @Component({
      selector: 'app-forms',
      standalone: true,
      imports: [FormsModule, CommonModule, ReactiveFormsModule, ContainerMaskComponent],
      template: \`
        <h2>Template-Driven Form</h2>
        <form #templateForm="ngForm" (ngSubmit)="onSubmitTemplateForm(templateForm)">
          <label> Name: </label>
          <input type="text" class="grow" id="name" name="name" ngModel required />

          <small *ngIf="templateForm.controls['name']?.invalid && templateForm.controls['name']?.touched">Il nome è richiesto.</small>

          <label> E-mail: </label>
          <input type="text" class="grow" placeholder="Email" id="email" name="email" ngModel required email />

          <span *ngIf="templateForm.controls['email']?.invalid && templateForm.controls['email']?.touched">Inserisci un'e-mail valida.</span>

          <button type="submit" [disabled]="templateForm.invalid">Invia</button>
        </form>

        <div *ngIf="submittedTemplate">
          Form inviato con successo! Dati:
          <pre>
            <code>{{ templateFormData | json }}</code>
          </pre>
        </div>

        <h2>Reactive Form</h2>
        <form [formGroup]="reactiveForm" (ngSubmit)="onSubmitReactiveForm()">
          <label>Name:</label>
          <input type="text" id="name" formControlName="name" />

          <span *ngIf="reactiveForm.controls['name'].invalid && reactiveForm.controls['name'].touched">Il nome è richiesto.</span>

          <label> E-mail: </label>
          <input type="text" placeholder="Email" id="email" formControlName="email" />

          <span *ngIf="reactiveForm.controls['email']?.invalid && reactiveForm.controls['email']?.touched">Inserisci un'e-mail valida.</span>

          <button type="submit" [disabled]="reactiveForm.invalid">Invia</button>
        </form>

        <div *ngIf="submittedReactive">
          Form inviato con successo! Dati:
          <pre>
            <code>{{ reactiveFormData | json }}</code>
          </pre>
        </div>
      \`
    })
    export class FormsComponent {
      // Template-driven form
      submittedTemplate = false;
      templateFormData: any = {};

      // Reactive form
      reactiveForm: FormGroup;
      submittedReactive = false;
      reactiveFormData: any = {};

      constructor(private fb: FormBuilder) {
        this.reactiveForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        });
      }

      onSubmitTemplateForm(form: any) {
        this.submittedTemplate = true;
        this.templateFormData = form.value;
      }

      onSubmitReactiveForm() {
        this.submittedReactive = true;
        this.reactiveFormData = this.reactiveForm.value;
      }
    }
   `
   // Template-driven form
   submittedTemplate = false;
   templateFormData: any = {};

   // Reactive form
   reactiveForm: FormGroup;
   submittedReactive = false;
   reactiveFormData: any = {};

   constructor(private fb: FormBuilder) {
     this.reactiveForm = this.fb.group({
       name: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
     });
   }

   onSubmitTemplateForm(form: any) {
     this.submittedTemplate = true;
     this.templateFormData = form.value;
   }

   onSubmitReactiveForm() {
     this.submittedReactive = true;
     this.reactiveFormData = this.reactiveForm.value;
   }
}
