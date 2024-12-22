import { Observable } from "rxjs";
import { TareaModel } from "../domain/tarea.model";

export abstract class ITareaRepository {
  abstract getAllTareas(): Observable<TareaModel[]>
}
