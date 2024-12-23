import { Observable } from "rxjs";
import { Tarea } from "../tarea";
import { AddTarea } from '../add-tarea.model';
import { EditTarea } from "../edit-tarea.model";

export abstract class TareaGateway {
  abstract getTareaById(id: String): Observable<Tarea>;
  abstract getTareaAll(): Observable<Array<Tarea>>;
  abstract AddTarea(_data: AddTarea): Observable<AddTarea>;
  abstract EditTarea(id: String, _updateTarea: EditTarea): Observable<EditTarea>;
}
