import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTareaUseCases } from '../../../domain/usercase/add-tarea-use-case';
import { Subscription } from 'rxjs';
import { AddTarea } from '../../../domain/models/Tarea/add-tarea.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent implements OnDestroy {

  model: AddTarea;
  private addTareaSubscribtion?: Subscription;

  constructor(private _addTareaUseCase: AddTareaUseCases, private router: Router) {
    this.model = {
      nombre: '',
      comentario: '',
      estTarea: 3,
      estado: 1
    }
  }

  onFormSubmit() {
    this.addTareaSubscribtion = this._addTareaUseCase.AddTarea(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/');
      }
    })
  }

  ngOnDestroy(): void {
    this.addTareaSubscribtion?.unsubscribe();
  }
}
