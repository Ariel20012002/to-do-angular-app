import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tarea } from "../models/Tarea/tarea";
import { TareaGateway } from "../models/Tarea/gateway/tarea-gateway";

@Injectable({
  providedIn: 'root'
})

export class GetTareaUseCases {

  constructor( private _tareaGateway: TareaGateway) {}

  getTareaById (id: String) : Observable<Tarea> {
    return this._tareaGateway.getTareaById(id);
  }

  getTareaAll() : Observable<Array<Tarea>> {
    return this._tareaGateway.getTareaAll();
  }
}
