import { Injectable } from "@angular/core";
import { TareaGateway } from "../models/Tarea/gateway/tarea-gateway";
import { Observable } from "rxjs";
import { RemoveTarea } from "../models/Tarea/remove-tarea.model";

@Injectable({
  providedIn: 'root'
})

export class RemoveTareaUseCases {

  constructor( private _tareaGateway: TareaGateway) {}

  RemoveTarea (id: String) : Observable<RemoveTarea> {
    return this._tareaGateway.RemoveTarea(id);
  }
}
