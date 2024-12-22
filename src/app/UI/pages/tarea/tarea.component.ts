import { Component, OnInit } from '@angular/core';
import { CircularProgressComponent } from '../../ds/atoms/circular-progress/circular-progress.component';
import { GetTareaUseCases } from '../../../domain/usercase/get-tarea-use-case';
import { Observable } from 'rxjs';
import { Tarea } from '../../../domain/models/Tarea/tarea';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CircularProgressComponent, RouterLink, RouterModule, FormsModule, CommonModule],
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
