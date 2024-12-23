import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { Tarea } from '../../../domain/models/Tarea/tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { GetTareaUseCases } from '../../../domain/usercase/get-tarea-use-case';
import { EditTarea } from '../../../domain/models/Tarea/edit-tarea.model';
import { EditTareaUseCases } from '../../../domain/usercase/edit-tarea-use-case';

@Component({
  selector: 'app-edit-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule],
  templateUrl: './edit-tarea.component.html',
  styleUrl: './edit-tarea.component.css'
})
export class EditTareaComponent implements OnInit, OnDestroy{

  id: string | null = null;
  paramsSubscription?: Subscription;
  editTareaSubscription?: Subscription;
  tarea?: Tarea;

  constructor(private route: ActivatedRoute, private router: Router,
    private _getTareaUseCases: GetTareaUseCases, private _editTareaUseCase: EditTareaUseCases) {}

    ngOnInit(): void {
      this.paramsSubscription = this.route.paramMap.subscribe({
        next: (params) => {
          this.id = params.get('id');
          if(this.id) {
            this._getTareaUseCases.getTareaById(this.id)
            .subscribe({
              next: (response) => {
                this.tarea = response;
              }
            })
          }
        }
      });
    }

  onFormSubmit(): void {
    const editTarea: EditTarea = {
      id: this.tarea?.id ?? 0,
      nombre: this.tarea?.nombre ?? '',
      comentario: this.tarea?.comentario ?? '',
      estTarea: this.tarea?.estTarea ?? 3,
    }

    if (this.id) {
      this.editTareaSubscription = this._editTareaUseCase.EditTarea(this.id, editTarea)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.editTareaSubscription?.unsubscribe();
  }
}
