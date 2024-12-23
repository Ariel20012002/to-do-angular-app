import { Injectable } from "@angular/core";
import { TareaGateway } from "../models/Tarea/gateway/tarea-gateway";
import { Observable } from "rxjs";
import { AddTarea } from "../models/Tarea/add-tarea.model";

@Injectable({
  providedIn: 'root'
})

export class AddTareaUseCases {

  constructor( private _tareaGateway: TareaGateway) {}

  AddTarea(_data: AddTarea) : Observable<AddTarea> {
    return this._tareaGateway.AddTarea(_data);
  }
}
