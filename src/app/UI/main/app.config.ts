import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { TareaGateway } from '../../domain/models/Tarea/gateway/tarea-gateway';
import { TareaApiService } from '../../infraestructure/driven-adapter/tarea-api/tarea-api.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: TareaGateway,
      useClass: TareaApiService
    }
  ]
};
