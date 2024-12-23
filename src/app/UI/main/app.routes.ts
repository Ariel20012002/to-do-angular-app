import { AddTareaComponent } from '../pages/add-tarea/add-tarea.component';
import { Routes } from '@angular/router';
import { TareaComponent } from '../pages/tarea/tarea.component';

export const routes: Routes = [
  {
    path: '',
    component: TareaComponent
  },
  {
    path: 'add-tarea',
    component: AddTareaComponent
  }
];
