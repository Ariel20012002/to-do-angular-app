import { Injectable } from "@angular/core";
import { TareaGateway } from "../models/Tarea/gateway/tarea-gateway";
import { EditTarea } from "../models/Tarea/edit-tarea.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EditTareaUseCases {

  constructor( private _tareaGateway: TareaGateway) {}

  EditTarea(id: String, _updateTarea: EditTarea) : Observable<EditTarea> {
    return this._tareaGateway.EditTarea(id, _updateTarea);
  }
}
