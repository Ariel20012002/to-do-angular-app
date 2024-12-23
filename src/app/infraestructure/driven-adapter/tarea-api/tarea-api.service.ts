import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Tarea } from '../../../domain/models/Tarea/tarea';
import { TareaGateway } from '../../../domain/models/Tarea/gateway/tarea-gateway';
import { environment } from '../../../../environments/environment';
import { AddTarea } from '../../../domain/models/Tarea/add-tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaApiService extends TareaGateway{

  private _url = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    super();
  }

  getTareaById(id: String): Observable<Tarea> {
    return this.http.get<Tarea>(this._url+id).pipe(delay(3000));
  }

  getTareaAll(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this._url}/api/Tarea/get-tareas`);
  }

  AddTarea(_data: AddTarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${this._url}/api/Tarea/insert-tarea`, _data);
  }


}
