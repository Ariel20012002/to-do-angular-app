import { Mapper } from "../../core/base/mapper";
import { TareaModel } from "../../core/domain/tarea.model";
import { TareaEntity } from "../../entity/tarea.entity";

export class TareaRepositoryMapper implements Mapper<TareaEntity, TareaModel> {
  mapFrom(param: TareaEntity): TareaModel {
    return {
      nombre: param.nombre,
      comentario: param.comentario,
      estTarea: param.estTarea
    }
  }

  mapTo(param: TareaModel): TareaEntity {
    throw new Error("Method not implemented.");
  }

  mapFromList(param: TareaEntity[]): TareaModel[] {
    throw new Error("Method not implemented.");
  }

  mapToList(param: TareaModel[]): TareaEntity[] {
    throw new Error("Method not implemented.");
  }

}
