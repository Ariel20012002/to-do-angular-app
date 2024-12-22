import { Observable } from "rxjs";
import { TareaModel } from "../domain/tarea.model";

export abstract class ITareaService {
  abstract getAllTareas(): Observable<TareaModel[]>;
}
