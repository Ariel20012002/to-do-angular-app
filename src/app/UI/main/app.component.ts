import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TareaComponent } from '../pages/tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareaComponent, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-angular-app';
}
