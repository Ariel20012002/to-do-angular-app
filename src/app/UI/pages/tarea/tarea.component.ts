import { CircularProgressComponent } from '../../ds/components/atoms/circular-progress/circular-progress.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetTareaUseCases } from '../../../domain/usercase/get-tarea-use-case';
import { Observable } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';
import { Tarea } from '../../../domain/models/Tarea/tarea';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CircularProgressComponent, RouterModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss'
})

export class TareaComponent implements OnInit{

  constructor(private _getTareaUseCase: GetTareaUseCases) {}

  tareas$?: Observable<Tarea[]>;

  ngOnInit(): void {
    this.tareas$ = this._getTareaUseCase.getTareaAll();
  }
}
