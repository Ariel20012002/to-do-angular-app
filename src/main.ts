import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/UI/main/app.config';
import { AppComponent } from './app/UI/main/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
