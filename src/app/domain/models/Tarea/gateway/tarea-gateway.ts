import { Observable } from "rxjs";
import { Tarea } from "../tarea";

export abstract class TareaGateway {
  abstract getTareaById(id: String): Observable<Tarea>;
  abstract getTareaAll(): Observable<Array<Tarea>>;
}
